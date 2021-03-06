/**
 * webapp常用方法
 * @module webapp常用方法
 */

/**
 * 时间转换
 * @class 时间转换
 */

/**
 *
 * @method getDateTimeStamp
 * @name 转换标准时间为时间戳
 */

// js时间转化为几天前,几小时前，几分钟前
function getDateTimeStamp(dateStr) {
    if (dateStr) {
        return Date.parse(dateStr.replace(/-/gi, '/'));
    }
}

/**
 *
 * @method timezone
 * @name 返回一个时区的时间
 */
function timezone(utc, timezone, isTimestamp) {
    let timeZone = (new Date()).getTimezoneOffset();
    return !isTimestamp
        ? parseInt(parseInt(new Date(utc.replace(/-/g, '/')).getTime()) - 3600 * (timeZone / 60) * 1000)
        : (utc + 3600000 * timezone);
};

/**
 * 参数为时间戳，返回几天前，几月前，几小时前，只返回一个值
 * @method getDateDiff
 * @name 只返回一个时间区间
 */
function getDateDiff(dateTimeStamp) {
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let halfamonth = day * 15;
    let month = day * 30;
    let now = new Date().getTime();
    let diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
        return;
    }
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;
    let result
    if (monthC >= 1) {
        if (monthC > 12) {
            result = '' + '一年前';
        }
        result = '' + parseInt(monthC) + '月前';
    } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前';
    } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前';
    } else { result = '刚刚'; }
    return result;
}
/**
 * 参数为标准时间，返回几天前，几月前，几小时前，只返回一个值
 * @method getDateDiff
 * @name 只返回一个时间区间
 */
function getDateDiff2(time) {
    let dateTimeStamp = new Date(time).getTime();
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let halfamonth = day * 15;
    let month = day * 30;
    let now = new Date().getTime();
    let diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
        return;
    }
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;
    let result;
    if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月前';
    } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前';
    } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前';
    } else { result = '刚刚'; }
    return result;
}
/**
 * 参数为秒，如果是毫秒记得除以1000，返回类型为有则返回，可返回多个单位,如5天4时32分5秒，4时32分5秒，32分5秒
 * @method SecondToDate
 * @name 只返回一个时间区间
 */
function SecondToDate(msd) {
    let time = msd
    if (time != null && time != '') {
        if (time > 60 && time < 60 * 60) {
            time = parseInt(time / 60.0) + '分钟' + parseInt((parseFloat(time / 60.0) -
                parseInt(time / 60.0)) * 60) + '秒';
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0) + '小时' + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + '分钟' +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + '秒';
        } else if (time >= 60 * 60 * 24) {
            time = parseInt(time / 3600.0 / 24) + '天' + parseInt((parseFloat(time / 3600.0 / 24) -
                    parseInt(time / 3600.0 / 24)) * 24) + '小时' + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + '分钟' +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + '秒';
        } else {
            time = parseInt(time) + '秒';
        }
    } else {
        time = '0天'
    }
    return time;
}

/**
 * 参数为秒，返回几天，几月，几小时，只返回一个值
 * @method SecondToDate2
 * @name 只返回一个时间区间
 */
function SecondToDate2(msd) {
    let time = msd
    if (time != null && time != '') {
        if (time > 60 && time < 60 * 60) {
            time = parseInt(time / 60.0) + '分钟';
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0) + '小时';
        } else if (time >= 60 * 60 * 24 && time < 60 * 60 * 24 * 365) {
            time = parseInt(time / 3600.0 / 24) + '天';
        } else if (time >= 60 * 60 * 24 * 365) {
            time = parseInt(time / 3600.0 / 24 / 365) + '年';
        } else {
            time = parseInt(time) + '秒';
        }
    } else {
        time = '已结束';
    }
    return time;
}

/**
 * 参数为标准时间，返回天，时，分，秒
 * @method SecondToDate3
 * @name 只返回一个时间区间
 */
function SecondToDate3(msg, type) {
    let oldTimep = getDateTimeStamp(msg)
    let newTimep = new Date().getTime();
    let cha = oldTimep - newTimep;
    if (cha < 0) {
        return -1;
    }
    let msd = cha / 1000;
    let time = msd
    if (time != null && time != '') {
        if (time > 60 && time < 60 * 60) {
            time = parseInt(time / 60.0) + '分钟' + parseInt((parseFloat(time / 60.0) -
                parseInt(time / 60.0)) * 60) + '秒';
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0) + '小时' + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + '分钟' +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + '秒';
        } else if (time >= 60 * 60 * 24) {
            if (type == 'h') {
                time = parseInt(time / 3600.0 / 24) + '天' + parseInt((parseFloat(time / 3600.0 / 24) -
                    parseInt(time / 3600.0 / 24)) * 24) + '小时'
                return time
            }
            time = parseInt(time / 3600.0 / 24) + '天' + parseInt((parseFloat(time / 3600.0 / 24) -
                    parseInt(time / 3600.0 / 24)) * 24) + '小时' + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + '分钟' +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + '秒';
        } else {
            time = parseInt(time) + '秒';
        }
    } else {
        time = '0天'
    }
    return time;
}

/**
 * 返回以连接符连接的当前时间，如-，可自定义需要的内容
 * @method timejoin
 * @name 只返回一个时间区间
 */
function timejoin(joinType, len) {
    let date = new Date();
    if (joinType == '-') {
        var seperator1 = '-';
    }
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    if (len == 1) {
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }
    return currentdate;
}

/**
 *
 * @method twoTimeCha
 * @name 返回2个时间之间的差
 */
function twoTimeCha(time1, time2) {
    let result = '';
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let halfamonth = day * 15;
    let month = day * 30;
    // 获取时间戳
    let tamp1 = new Date(time1).getTime();
    let tamp2 = new Date(time2).getTime();
    let diffValue = tamp2 - tamp1;
    if (diffValue < 0) {
        return;
    }
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;
    if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月';
    } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周';
    } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天';
    } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时';
    } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟';
    }
    return result;
}

/**
 * 例：2018-01-01 12:00:00
 * @method 获取本地时间
 * @name 获取本地时间
 */
function getLocalTime() {
    let date = new Date();
    let len = date.getTime();
    let offset = date.getTimezoneOffset() * 60000;
    let utctime = len + offset;
    let seperator1 = '-';
    let seperator2 = ':';
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let hours = date.getHours(); // 小时
    let minutes = date.getMinutes(); // 分钟
    let seconds = date.getSeconds(); // 秒
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    if (hours >= 0 && hours <= 9) {
        hours = '0' + minutes;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = '0' + seconds;
    }
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        ' ' + hours + seperator2 + minutes +
        seperator2 + seconds;
    return currentdate;
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n;
}
// 传入13位时间戳，使用formatTime(1545903266795, 'Y年M月D日 h:m:s')或者formatTime(1545903266795, 'Y-M-D h:m:s')即可
function formatTime(number, format) {
    let time = new Date(number)
    let newArr = []
    let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
    newArr.push(time.getFullYear())
    newArr.push(formatNumber(time.getMonth() + 1))
    newArr.push(formatNumber(time.getDate()))

    newArr.push(formatNumber(time.getHours()))
    newArr.push(formatNumber(time.getMinutes()))
    newArr.push(formatNumber(time.getSeconds()))

    for (let i in newArr) {
        format = format.replace(formatArr[i], newArr[i])
    }
    return format;
}

export {
    getDateTimeStamp,
    getDateDiff,
    getDateDiff2,
    SecondToDate,
    SecondToDate2,
    SecondToDate3,
    timejoin,
    twoTimeCha, // 返回2个时间之间的差
    getLocalTime, // 获取本地时间
    timezone, // 返回一个时区的时间
    formatTime // 传入时间戳返回年月日时分秒
}
