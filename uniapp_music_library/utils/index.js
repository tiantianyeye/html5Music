//工具函数库
function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};


//将音乐的秒钟转为分钟 04.25
function secondToMinute(time){
	time = parseInt(time/1000);  //转为秒数
	var minute = parseInt(time / 60);
	minute = minute<10? '0'+minute: minute;
	var second = time % 60;
	second = second<10? '0'+second: second;
	return minute + '.'+ second;
	
}

function request(url, method, data, resbook){
    return new Promise((resolve, reject)=>{
        uni.showLoading({
            title: '加载中...'
        });
        uni.request({
            url: url,
            data: data || {},
            method: method || 'GET',
			header:{
				"Content-Type": (method=='GET'?"application/json": 
							"application/x-www-form-urlencoded")
			},
            success: function(res) {
				//console.log(res)
                uni.hideLoading();
                if(res.statusCode==200){
					if(resbook){
						resolve(res.data);
					}else{
						resolve(res.data.data);
					}
                }else{
                    var title = res.errMsg
                    showToast(title);  //提示信息
                    reject();
                } 
            }
        });
    })
}

//toast提示信息
function showToast(title, icon='none'){
    uni.showToast({
        title,
        icon
    });
}

function get(url, data, resbook){
    return request(url, 'GET', data, resbook);
}

function post(url, data, resbook){
    return request(url, 'POST', data, resbook);
}


//根据key获取storage
function getLocalStorage(key){
    return uni.getStorageSync(key);
}

//根据key删除storage
function removeLocalStorage(key){
    return uni.removeStorageSync(key);
}

//根据key value设置storage
function setLocalStorage(key,value){
    uni.setStorageSync(key,value);
}

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	showToast,
	get,
	post,
	getLocalStorage,
	removeLocalStorage,
	setLocalStorage,
	secondToMinute
}


