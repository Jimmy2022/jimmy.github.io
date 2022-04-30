<script>
	window.onload = function() {
		// https://blog.csdn.net/animatecat/article/details/85164093
		var isCharge;
		var batteryPercent = 0;
		navigator.getBattery().then(function(battery) {
			isCharge = battery.charging;
			batteryPercent = Math.round(battery.level * 100);
			var batteryInfoStyle;
			if (batteryPercent >= 85) {
				batteryInfoStyle = "b-green"
			} else if (batteryPercent > 30) {
				batteryInfoStyle = "b-orange"
			} else {
				batteryInfoStyle = "b-red"
			}
			if (!batteryPercent) {
				batteryPercent = "未知";
				batteryInfoStyle = "b-orange"
			}
			if (isCharge) {
				style = "b-green"
			}
			var content = " 电池电量:" + batteryPercent + "%"content = (isCharge ? "正在充电": "未在充电") + content

			document.getElementById("phoneinfo").innerHTML = content $("#phoneinfo").addClass(style)

			console.log("battaryPercent:" + batteryPercent)

			$.getJSON('https://7re15m3a5ra8w.cfc-execute.bj.baidubce.com/',
			function(res) {
				console.log(res)
			})

			$.get('https://baidu.com/',
			function(res) {
				console.log(res)
			})
		});
	}

	// https://baijiahao.baidu.com/s?id=1707034727158253423&wfr=spider&for=pc
	const serach_engine_map = new Map();
	serach_engine_map.set('baidu', ['https://www.baidu.com/s?word=']);
	serach_engine_map.set('bing_cn', ['https://cn.bing.com/search?q=']);
	serach_engine_map.set('yandex', ['https://yandex.com/search/?text=']);
	serach_engine_map.set('zhihu', ['https://www.zhihu.com/search?type=content&q=']);
	serach_engine_map.set('google', ['https://www.google.com/search?q=']);
	function search(type) {
		var content = document.getElementById("search-content").value;
		window.location.href = serach_engine_map.get(type)[0] + content
	}
	function search_image(type) {
		var content = document.getElementById("search-content").value;
		return serach_engine_map.get(type)[1]
	}
</script>