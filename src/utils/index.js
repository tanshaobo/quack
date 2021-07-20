export const utils = {
    // 获取url信息
    getParams: (param, u) => {
        let _v = u || window.location.href;
        let ret = {};
        let seg = []
        let segArr = _v.split('?')
        for (let i in segArr) {
            if (i != 0) {
                seg.push(segArr[i])
            }
        }
        seg[0] = seg[0].split('#')[0]
        let newSeg = []
        seg.forEach((item) => {
            item.split('&').forEach(ite => {
                newSeg.push(ite)
            })
        })
        newSeg.forEach((element) => {
            let idx = element.indexOf('=');
            let key = element.substring(0, idx).toLowerCase();
            ret[key] = element.substring(idx + 1);
        });
        return ret[param.toLowerCase()] || '';
    },

    // 获取浏览器内核信息
    getBrowser: () => {
        let u = navigator.userAgent;
        return {
            isJhApp: u.indexOf('tag=jhwebview') > -1, // 是否在金和内部打开
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者安卓QQ浏览器
            iPad: u.indexOf('iPad') > -1, // 是否为iPad
            webApp: u.indexOf('Safari') == -1, // 是否为web应用程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') == -1 // 是否为微信浏览器
        }
    },
    /* 随机数获取 */
    randomFrom: (lowerValue, upperValue) => {
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    },
    /* 比较数组的差异 */
    arrayDiff: (a, b) => {
        let c = 0
        for (var i = 0; i < b.length; i++) {
            // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
            // 注释：indexOf() 方法对大小写敏感！
            // 注释：如果要检索的字符串值没有出现，则该方法返回 -1。
            // 该方法将从头到尾地检索字符串
            if (a.indexOf(b[i]) === -1) {
                c += 1
            }
        }
        return c
    },
    deepCopy: o => {
      return typeof(o) == 'undefined'?console.log(o+'is undefined'):JSON.parse(JSON.stringify(o))
    }
}
