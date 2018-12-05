const CryptoJS = require('crypto-js');

/**
 * AES-128/MD5/Base64/Utf-8 加密步骤
 * 第一步：将参数字符串进行 MD5 加密作为接口的签名，如果需要使用签名
 * 第二步：将参数字符串和接口签名拼接上进行AES加密
 * 第三步：将 AES 加密后的密文用 Base64 编码
 * 第四步：将编码后的密文用 encodeURIComponent 编码 
 * 第五步：输出最终的密文串
 */

/**
 * 加密
 * @param {Object/String} data -- 待加密的明文
 * @param {String} sessionKey -- 用于签名的 session_key 从后端获得
 * @param {String} key -- 密钥
 * @param {String} iv -- 初始向量
 * @returns {String} URI_text -- 返回加密后的密文
 */
function encryption(data, key, iv, sessionKey) {
    
    let message = '';
    if (data.constructor === Object) { // 对象格式数据
        if (sessionKey) { // 需要签名
            let paramsArray = [];
            for (let attr in data) {
                if (data.hasOwnProperty(attr)) {
                    paramsArray.push(attr + '=' + data[attr]);
                }
            }
            const paramsString = paramsArray.join('&');
            message = paramsString + '&sign=' + CryptoJS.MD5(paramsString + sessionKey);
        } else {
            message = JSON.stringify(data);
        }
    }
    if (typeof data === 'string') { // 文本格式数据
        message = data;
    }

    /**
     * 备注1：CryptoJS 默认为 CBC 模式以及默认填充方式为 Pkcs7
     * 备注2：Java jdk 自带的包只支持 Pkcs5 ，如果要支持 Pkcs7 padding 填充方式，需要用到一个开源jar包
     * 备注3：经过多次测试，加密后返回的密文并不是字符串，也不是网上许多文章所说的 base64 格式！
     * 拓展：查阅官方文档得知它是一个 CipherParams 对象（作者自定义的），CipherParams 对象使您可以访问加密期间使用的所有参数
     * 在字符串上下文中使用 CipherParams 对象时，它会根据格式策略（这也可以自定义，略过）自动转换为字符串
     * example:
     * var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase"); 
     * alert(encrypted.key); 
     * --> 74eb593087a982e2a6f5dded54ecd96d1fd0f3d44a58728cdcd40c55227522223 
     * alert(encrypted.iv); 
     * --> 7781157e2629b094f0e3dd48c4d786115 
     * alert(encrypted.salt); 
     * --> 7a25f9132ec6a8b34 
     * alert(encrypted.ciphertext); 
     * --> 73e54154a15d1beeb509d9e12f1e462a0 
     * alert(encrypted); 
     * --> U2FsdGVkX1+iX5Ey7GqLND5UFUoV0b7rUJ2eEvHkYqA=
     */
    const cipherObject = CryptoJS.AES.encrypt(message, key, {
        iv,
        mode: CryptoJS.mode.CBC, 
        padding: CryptoJS.pad.Pkcs7 
    });

    // 对密文以 base64 编码，用于与服务器后端的网络传输
    const base64_cipherText = CryptoJS.enc.Base64.stringify(cipherObject.ciphertext); // 等价于 cipherObject.toString()

    // 对 base64 密文以 encodeURIComponent 编码，用于 url 查询字符串
    const URI_text = encodeURIComponent(base64_cipherText);

    // 输出最终的加密文本串
    return URI_text;
}

/**
 * 获取加密字符串
 * @param {Object/String} data -- 待加密的明文
 * @param {String} sessionKey -- 用于签名的 session_key 从后端获得
 * @returns {String} URI_cipherText -- 返回加密后的密文
 */
function getEncryptedString(data, sessionKey) {
    sessionKey = sessionKey || '';

    /**
     * key：用 utf-8 的解码方式对 16 位密钥解码生成 128 位二进制串
     * 只能使用长度为 16 的密钥字符串(可同后端协商更换)，对应 AES-128
     * 如果需要 AES-256，则使用长度为 32 的密钥字符串
     * utf-8 可换为其他 crypto-js 支持的编码方式，同后端协商
     */
    let key = CryptoJS.enc.Utf8.parse('A123456789liuy66');

    /**
     * iv：用 utf-8 的解码方式对 16 位初始向量解码生成二进制串
     * 不同的 iv 加密后的字符串是不同的，加密和解密需要相同的 iv，可更换
     * 建议随机生成长度为32的16进制字符串
     * utf-8 可换为其他 crypto-js 支持的编码方式，同后端协商
     */
    let iv = CryptoJS.enc.Utf8.parse('a987654321liuy66');

    const URI_cipherText = encryption(data, key, iv, sessionKey);
    return URI_cipherText;
}

/**
 * 解密
 */
function decryption(data, key ,iv) {

    // URI 解码
    const decode_text = decodeURIComponent(data);

    /**
     * 备注：解密后返回的明文是 WordArray 对象（作者自定义的）
     * 在字符串上下文中使用 WordArray 对象时，它会自动转换为十六进制字符串
     * 建议通过显式调用 toString 方法并传递编码器将 WordArray 对象转换为其他格式
     */
    const result_text = CryptoJS.AES.decrypt(decode_text, key, {
        iv,
        mode: CryptoJS.mode.CBC, 
        padding: CryptoJS.pad.Pkcs7
    });
    
    // 转成 web 常用的 utf-8 格式
    return result_text.toString(CryptoJS.enc.Utf8);
}
 
/**
 * 获取文本解密字符串
 */
function getDecryptedString(data) {
    let key = CryptoJS.enc.Utf8.parse('A123456789liuy66');
    let iv = CryptoJS.enc.Utf8.parse('a987654321liuy66');
    const decryptedResult = decryption(data, key, iv);
    return decryptedResult;
}

/**
 * 获取对象解密字符串
 */
function getDecryptedObject(data) {
    let key = CryptoJS.enc.Utf8.parse('A123456789liuy66');
    let iv = CryptoJS.enc.Utf8.parse('a987654321liuy66');
    const decryptedResult = decryption(data, key, iv);
    return JSON.parse(decryptedResult);
}

/**
 * sha1 加密
 */

function getSHA1String(data) {
    return CryptoJS.SHA1(data).toString();
}

export default {
    getEncryptedString,
    getDecryptedString,
    getDecryptedObject,
    getSHA1String
};