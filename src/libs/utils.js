/**
 * 一些实用工具方法
 * 
 * @since 2018-10-17
 * @author nobody
 * @description 建议采用4个空格的制表符进行缩进及ECMAScript规范语法（不限于ES6）
 */

export default {

    /**
     * 对象/数组深拷贝
     * @param {Object/Array} source - 
     * @returns {Object/Array}
     */
    deepClone(source) {
        if (this.isHasSpecialKey(source)) {
            // 判断待拷贝的源对象/数组是数组还是对象
            const target = source.constructor === Array ? [] : {};
            // 遍历源对象/数组
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    // 如果遍历到的值是对象/数组，就继续递归遍历
                    if (Array.isArray(source[key]) || (source[key] instanceof Object && source[key].constructor === Object)) {
                        target[key] = source[key].constructor === Array ? [] : {};
                        target[key] = this.deepClone(source[key]);
                    } else {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        } else {
            return JSON.parse(JSON.stringify(source));
        }
    },
    /**
     * 判断待拷贝的源对象/数组内部是否含有特殊值
     */

    isHasSpecialKey(source) {
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                if (Array.isArray(source[key]) || (source[key] instanceof Object && source[key].constructor === Object)) {
                    this.isHasSpecialKey(source[key]);
                } else {
                    if (typeof source[key] === 'undefined' || source[key] instanceof Function || typeof source[key] === 'symbol') {
                        return true;
                    }
                }
            }
        }
        return false;
    },

    /**
     * 从数组中查找给定值，找到返回true，否则返回false
     * @param {array} array -- 待查找数组
     * @param {string/number} id -- 给定的查找值
     * @return {boolean} true/false
     */
    isExist(id, array) {
        if (array.indexOf(id) > -1) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * 从数组去重
     * @param {array} array -- 待去重的数组
     * @return {array} 去重后的新数组
     */
    removeRepeat(array) {
        let result = array.sort().reduce((init, current) => {
            if (init.length === 0 || init[init.length - 1] !== current) {
                init.push(current);
            }
            return init;
        }, []);
        return result;
    },

    /**
     * 正则验证
     */
    validateReg: {
        // 身份证验证
        idCard(num) {
            let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
            return reg.test(num) ? true : false;
        },
        // 手机验证
        phoneNumber(num) {
            let reg = /^(13[0-9]|14[5-9]|15[0-9]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
            return reg.test(num) ? true : false;
        }
    },

}