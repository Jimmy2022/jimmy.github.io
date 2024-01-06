//    https://baijiahao.baidu.com/s?id=1707034727158253423&wfr=spider&for=pc
var SEARCH_ENGINE_MAP = new Map();
// type, searchUrl, icoUrl, hot
SEARCH_ENGINE_MAP.set('baidu', {
	'url': 'https://baidu.com',                     // required
	'search': 'https://www.baidu.com/s?word={0}',    // optional
	'explor': ['https://top.baidu.com/board?tab=realtime'],                                    // optional
	'icon': {
		'url': 'https://www.baidu.com/favicon.ico',  // required
		'pc': 1,                                   // optional
		'mobile': 1,                               // optional
	}
});
SEARCH_ENGINE_MAP.set('bing_cn', {
	'url': 'https://www.bing.com',
	'search': 'https://cn.bing.com/search?q={0}',
	'explor': [],
	'icon': {
		'url': 'https://cn.bing.com/sa/simg/favicon-2x.ico',
		'pc': 0.95,
	}
});
SEARCH_ENGINE_MAP.set('yandex', {
	'url': 'https://yandex.com',
	'search': 'https://yandex.com/search/?text={0}',
	'explor': [],
	'icon': {
		'url': 'https://avatars.mds.yandex.net/get-bunker/56833/d6c72510e34955b7c7fef9fd3af8f71a88763081/orig'
	}
});
SEARCH_ENGINE_MAP.set('zhihu', {
	'url': 'https://zhihu.com',
	'search': 'https://www.zhihu.com/search?type=content&q={0}',
	'explor': ['https://www.zhihu.com/explore'],
	'icon': {
		'url': 'https://static.zhihu.com/heifetz/favicon.ico',
		'pc': 0.90,
		'mobile': 0.8
	}
});
SEARCH_ENGINE_MAP.set('google', {
	'url': 'https://www.google.com',
	'search': 'https://www.google.com/search?q={0}',
	'explor': [],
    'icon': {
		'url': 'http://www.google.cn/favicon.ico',
		'pc': 1.1,
	}
});
SEARCH_ENGINE_MAP.set('github', {
	'url': 'https://www.github.com',
	'search': 'https://github.com/search?q={0}',
	'explor': ['https://github.com/explore', 'https://github.com/trending'],
	'icon': {
		'url': 'https://github.githubassets.com/favicons/favicon.png',
		'pc': 0.89,
		'mobile': 0.9
	},
});
SEARCH_ENGINE_MAP.set('bilibili', {
	'url': 'https://www.bilibili.com',
	'search': 'https://search.bilibili.com/all?keyword={0}',
	'explor': ['https://www.bilibili.com/v/popular/rank/all', 'https://www.bilibili.com/v/popular/all?'],
	'icon': {
		'url': 'https://www.bilibili.com/favicon.ico?v=1',
		'pc': 0.88,
		'mobile': 0.9
	},
});
SEARCH_ENGINE_MAP.set('weibo', {
	'url': 'https://www.weibo.com',
	'search': 'https://s.weibo.com/weibo?q={0}',
	'explor': ['https://s.weibo.com/top/summary?cate=realtimehot','https://s.weibo.com/top/summary?cate=socialevent'],
	'icon': {
		'url': 'https://weibo.com/favicon.ico',
		'mobile': 0.97
	},
});
SEARCH_ENGINE_MAP.set('toutiao', {
	'url': 'https://www.toutiao.com',
	'search': 'https://so.toutiao.com/search?keyword={0}',
	'explor': ['https://so.toutiao.com/search?keyword=%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF'],
	'icon': {
		'url': 'https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico',
	},
});
SEARCH_ENGINE_MAP.set('pocket', {
	'url': 'https://www.getpocket.com',
	'search': 'https://getpocket.com/my-list/search?query={0}',
	'explor': ['https://getpocket.com/zh/explore'],
	'icon': {
		'url': 'https://getpocket.com/favicon.ico',
		'pc': 0.90,
		'mobile': 0.85
	},
});
SEARCH_ENGINE_MAP.set('ithome', {
	'url': 'https://www.ithome.com',
	'search': 'https://www.ithome.com/search/{0}.html',
	'explor': ['https://m.ithome.com/rankm/'],
	'icon': {
		'url': 'https://img.ithome.com/img/soft/ithome.svg',
		'pc': 0.90,
		'mobile': 0.8
	},
});

SEARCH_ENGINE_MAP.set('xueqiu', {
	'url': 'https://xueqiu.com/',
	'search': 'https://xueqiu.com/k?q={0}',
	'explor': ['https://xueqiu.com/today'],
	'icon': {
		'url': 'https://xqdoc.imedao.com/17aebcfb84a145d33fc18679.ico',
		'pc': 0.95,
	},
});

SEARCH_ENGINE_MAP.set('maimai', {
	'url': 'https://maimai.com/',
	'search': 'https://maimai.cn/web/search_center?type=feed&query={0}',
	'explor': ['https://maimai.cn/web/feed_explore'],
	'icon': {
		'url': 'https://maimai.cn/static/images/website/icons/logo.png',
	},
});

SEARCH_ENGINE_MAP.set('smzdm', {
	'url': 'https://www.smzdm.com/',
	'search': 'https://search.smzdm.com/?c=home&s={0}',
	'explor': ['https://post.smzdm.com/'],
	'icon': {
		'url': 'https://www.zhidemai.com/favicon.ico',
	},
});

// https://coolapk.com/favicon.ico
// https://xueqiu.com/today

String.prototype.format = function () {
	var formatted = this;
	for (var arg in arguments) {
		formatted = formatted.replace("{" + arg + "}", arguments[arg]);
	}
	return formatted;
};

// search engine to show
var ENGINES = ['baidu', 'bing_cn', 'yandex', 'google', 'github', 'bilibili', 'weibo', 'pocket', 'zhihu', 'ithome','toutiao','xueqiu', 'smzdm']
var DEFAULT_ENGINE = 'baidu'
var SEARCH_INPUT = 'search-input'

function searchEngine(type) {
	let content = document.getElementById(SEARCH_INPUT).value;
	let angry = content.endsWith('!') || content.endsWith('！')
	if (!content){
		window.location.href = SEARCH_ENGINE_MAP.get(type)['url']
	} else if (angry) {
		content = content.replace(/!|！/g, '')
		for (i in ENGINES) {
			e = ENGINES[i];
			if (SEARCH_ENGINE_MAP.has(e)) {
				window.open(SEARCH_ENGINE_MAP.get(e)['search'].format(content))
			}
		}
	} else {
		window.location.href = SEARCH_ENGINE_MAP.get(type)['search'].format(content)
	}
}

// search contents

function showSearchEngine() {
	content = ''
	
	for (i in ENGINES) {
		let icoSize = 2.5
		if (isMobile()) {
			icoSize = 12
		} 
		let type = ENGINES[i]
		customRatio = isMobile() ?  SEARCH_ENGINE_MAP.get(type)['icon']['mobile'] : SEARCH_ENGINE_MAP.get(type)['icon']['pc']
		if(!customRatio){
			customRatio = 1
		}
		if(isMobile() && i != 0 && i  % 5 == 0){
			content = content + "<br>"
		}
		icoSize = icoSize * customRatio
		content = content + '&nbsp' + '<input type="image" onclick=window.searchEngine("{0}") \
		src=\'./images/icon/{1}.ico\' style="width:{2}%" />'.format(type,type, icoSize) + ' '
	}
	document.getElementById('searhers').innerHTML = content;

	document.getElementById(SEARCH_INPUT).onkeypress = function (event) {
		if (event.which === 13) {
			searchEngine(DEFAULT_ENGINE)
		}
	}
}

// battary
window.onload = function () {
	// https://blog.csdn.net/animatecat/article/details/85164093
	var isCharge;
	var batteryPercent = 0;
	// https://github.com/vueuse/vueuse/issues/588
	const isSupported = navigator && 'getBattery' in navigator 
	var isCharge = false;
	var batteryPercent = -1;
	var style = "b-red";
	if (isSupported) {	
	navigator.getBattery().then(function (battery) {
		isCharge = battery.charging;
		batteryPercent = Math.round(battery.level * 100);
		if (batteryPercent >= 85) {
			style = "b-green"
		} else if (batteryPercent > 30) {
			style = "b-orange"
		} else {
			style = "b-red"
		}
		if (!batteryPercent) {
			batteryPercent = "未知";
			style = "b-orange"
		}
		if (isCharge) {
			style = "b-charging"
		}
		let content = batteryPercent + "%"
		document.getElementById("battery").innerHTML = content
		$("#battery").addClass(style).addClass("battery")
		console.log("battaryPercent:" + batteryPercent);
	
	});  
	}
		
	let content = window.batteryPercent + "%"
	document.getElementById("battery").innerHTML = content
	$("#battery").addClass(window.style).addClass("battery")
	console.log("battaryPercent:" + window.batteryPercent);

	content = '&nbsp'
	let ip, city = 'unknown', isp
	// https://www.geeksforgeeks.org/how-to-get-client-ip-address-using-javascript/
	$.get("https://ipinfo.io", function(response, content, l) {
		ip = response.ip
		city = response.city
		isp = response.org
	}, "json").done(function (){
		if(isp.match(/Mobile/ig)){
			isp = '中国移动'
		} else if (isp.match(/CHINANET/ig)){
			isp = '中国电信'
		} else if (isp.match(/Unicom/ig)) {
			isp = '中国联通'
		}
		var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
		var netType = connection ? connection.effectiveType : '';
		content = content + '<a href="https://ipaddress.com/ipv4/{0}" />{1}</a>\
		<a href="https://weather.cma.cn/web/weather/map.html"/>{2}</a> {3}-{4}'.format(ip,ip,city,isp,netType)
		// content = content + ip + ' ' + city + ' ' + isp
		document.getElementById("ip").innerHTML = content
	})

	if(!isMobile()){
		document.getElementById('search-input').focus()
	}

	// test
	$.get('https://baidu.com/',
		function (res) {
			console.log(res)
		})
	showSearchEngine();
};

function takeYourLife() {
	explors = ['https://tophub.today/']
	values = SEARCH_ENGINE_MAP.values()
	for(const e of values) {
		explors = explors.concat(e['explor'])
	}

	console.log(explors)
	window.location.href = explors[Math.floor(Math.random() * explors.length)]
}

function isMobile(){
    let details = navigator.userAgent;
	let regexp = /android|iphone|kindle|ipad|mobile|weixin/i;
    return regexp.test(details);
}