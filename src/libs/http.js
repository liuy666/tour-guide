import axios from 'axios';
import Qs from 'qs';
// import CryptoJS from './crypto.js';

// console.log(CryptoJS);
/**
 * Axios - request 拦截器
 */
axios.interceptors.request.use((config) => {
    return config;
},(err) => {
    return Promise.reject(err);
});

/**
 * Axios - response 拦截器
 */
axios.interceptors.response.use((res) => {
	return res;
},(err) => {
	return Promise.reject(err);
});

/**
 * 单一请求--检查异步请求的后端返回信息码code
 * @param {object} res -- 异步请求返回的数据主体对象
 * @return {object}  code正常则返回数据对象数据主体对象，否则弹出对话框显示msg信息
 */
function checkCode(res) {
	// console.log('------ 检查 Code 信息码 ------');
	// console.log(res);
	if (res.status === 200) {
		if (res.data.code === 0) {
			// console.log('**** 这里是数据 ****');
			return res.data;
		} else {
			// console.log('错误信息:\ncode:' + res.data.code + '\nmsg:' + res.data.msg);
			return false;
		}
	}
}

function checkCodeForPost(res) {
	// console.log('------ 检查 Code 信息码 ------');
	// console.log(res);
	if (res.status === 200) {
		if (res.data.code === 0) {
			// console.log('**** 这里是数据 ****');
			return res.data;
		} else {
			// console.log('错误信息:\ncode:' + res.data.code + '\nmsg:' + res.data.msg);
			return {
				status: false,
				msg: res.data.msg
			};
		}
	}
}

/**
 * 单一请求--检查http状态码
 * @param {object} err -- 请求异常后返回的数据对象
 * @return {object}  请求正常则返回数据对象data，否则返回自定义错误提示信息对象
 */
function checkStatus(err) {
	// console.log('------ 检查 Http 状态码 ------');
	// console.log(err.response);
}

/**
 * 并发请求--检查异步请求的后端返回信息码code
 * @param {object} resList
 * @return {object/array}
 */
function checkAllCode(resList) {
	// console.log('------ 检查并发 Code 信息码 ------');
	let isSuccess = resList.every(item => {
		return item.data.code === 0;
	});
	if (isSuccess) {
		// console.log('**** 这里是并发请求数据 ****');
		return resList.map(item => {
			return item.data;
		});
	} else {
		// title: '温馨提示',
        // content: '当前服务不可用，请手动刷新后重试'
		// console.log(resList);
        return false;
	}
}

/**
 * 并发请求--检查http状态码
 * @param {array} err
 * @return {object}
 */
function checkAllStatus(err) {
	// console.log('------ 检查并发 Http 状态码 ------');
	// console.log(err.response);
	// let isSuccess = resList.every(item => {
	// 	return item.status === 200;
	// });
	// if(isSuccess) {
	// 	let dataList = resList.map(item => {
	// 		return item.data;
	// 	});
	// 	return {
	// 		status: 200,
	// 		data: dataList
	// 	};
	// } else {
	// 	return {
	// 		status: -400,
	// 		msg: '请确认您的网络连接正常，然后点击刷新重试'
	// 	};
	// }
}

/*
 * Axios封装-get/post/put/delete/all
 */
export default {
	get(url, params) {
		params = params || {};
		return axios({
			method: 'get',
			url,
			params
		})
		.then(checkCode)
		.catch(checkStatus);
	},
	post(url, bodyParams, contentType, urlParams) {
		urlParams = urlParams || {};
        if (Object.keys(urlParams).length) {
			url += '?' + Qs.stringify(urlParams);
		}
		return axios({
			method: 'post',
			url,
			data: contentType ? bodyParams : JSON.stringify(bodyParams),
			headers: {
				'Content-Type': contentType || 'application/json'
			}
		})
		.then(checkCodeForPost)
		.catch(checkStatus);
	},
	put(url, urlParams, bodyParams) {
		urlParams = Object.assign({}, urlParams, {
			// 'access_token': sessionStorage.getItem('token_key')
		});
		if (Object.keys(urlParams).length) {
			url += '?' + Qs.stringify(urlParams);
		}
		return axios({
			method: 'put',
			url,
			data: JSON.stringify(bodyParams),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(checkCode)
		.catch(checkStatus);
	},
	delete(url, urlParams, bodyParams) {
		urlParams = Object.assign({}, urlParams, {
			// 'access_token': sessionStorage.getItem('token_key')
		});
		url += '?' + Qs.stringify(urlParams);
		return axios({
			method: 'delete',
			url,
			data: JSON.stringify(bodyParams),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(checkStatus)
		.then(checkCode);
	},
	all(requestList) {
		requestList = requestList.map(item => {

			// 发出请求
			if(item.type === 'get') {
				item.url += '?' + Qs.stringify(item.urlParams);
				return axios.get(item.url);
			}
            if(item.type === 'post') {
				return axios.post(item.url, item.bodyParams, {
					headers: {
						'Content-Type': 'application/json'
					}
				});
            }
        });
		return axios.all(requestList)
					.then(axios.spread((...resList) => { // resList <==> [acct, perms]
						return checkAllCode(resList);
					}))
					.catch(resObj => {
						return checkAllStatus(resObj);
					});
	}
};
