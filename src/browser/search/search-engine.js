
var suggestContainer = document.getElementsByClassName("suggest")[0];
	var searchInput = document.getElementsByClassName("inputtext")[0];
	var search_bg = document.getElementsByClassName("search_bg")[0];
	var btn = document.getElementsByClassName("subb")[0];
	var searchResult = document.getElementById("search-result");

// 清除建议框内容
	function clearContent() {
		var size = searchResult.childNodes.length;
		for (var i = size - 1; i >= 0; i--) {
		searchResult.removeChild(searchResult.childNodes[i]);
		}
	 };

	var timer = null;
	// 注册输入框键盘抬起事件
	searchInput.onkeyup = function (e) {
		// suggestContainer.style.display = "block";
		// 如果输入框内容为空 清除内容且无需跨域请求
		if (this.value.length === 0) {
		clearContent();
		return;
		}
		if (this.timer) {
		clearTimeout(this.timer);
		}
		if (e.keyCode !== 40 && e.keyCode !== 38) {
		// 函数节流优化
		this.timer = setTimeout(() => {
			// 创建script标签JSONP跨域
			var script = document.createElement("script");
			 script.src = "https://www.baidu.com/su?&wd=" + encodeURI(this.value.trim()) +
				"&p=3&cb=handleSuggestion";
			 document.body.appendChild(script);
		}, 130)
		}

	 };

	// 回调函数处理返回值
	function handleSuggestion(res) {
		// 清空之前的数据！！
		clearContent();
		var result = res.s;
		// 截取前五个搜索建议项
		if (result.length >=0) {
		result = result.slice(0, 10)
		}
		for (let i = 0; i < result.length; i++) {
		// 动态创建li标签
		var liObj = document.createElement("li");
		liObj.innerHTML = result[i];
		searchResult.appendChild(liObj);
		}
		// 自执行匿名函数--删除用于跨域的script标签
		(function () {
		var s = document.querySelectorAll('script');
		for (var i = 0, len = s.length; i < len; i++) {
			document.body.removeChild(s[i]);
		}
		})()
	 }

	 // 事件委托 点击li标签或者点击搜索按钮跳转到百度搜索页面
	search_bg.addEventListener("click", function (e) {
		if (e.target.nodeName.toLowerCase() === 'li') {
		var keywords = e.target.innerText;
		searchInput.value = keywords;
		btn.click();
		} else if (e.target.id === 'btn') {
		btn.click();
		}
	}, false);

	var i = 0;
	var flag = 1;

	// 事件委托 监听键盘事件
	search_bg.addEventListener("keydown", function (e) {
		var size = searchResult.childNodes.length;
		if (e.keyCode === 13) {
		jumpPage();
		};
		// 键盘向下事件
		if (e.keyCode === 40) {
		if (flag === 0) {
			i = i + 2;
		}
		flag = 1;
		e.preventDefault();
		if (i >= size) {
			i = 0;
		}
		if (i < size) {
			searchInput.value = searchResult.childNodes[i++].innerText;
		}
		};
		// 键盘向上事件
		if (e.keyCode === 38) {
		if (flag === 1) {
			 i = i - 2;
		}
		flag = 0;
		e.preventDefault();
		if (i < 0) {
			 i = size - 1;
		}
		if (i > -1) {
			 searchInput.value = searchResult.childNodes[i--].innerText;
		}
		};
	}, false);

	// 点击页面任何其他地方 搜索结果框消失
	document.onclick = () => clearContent();
	
	var seBox = document.getElementsByClassName("seBox");
var scc = document.getElementById("searchCheck");
var sc = document.getElementById("search");
var bbox = document.getElementById("bbox");
var scbtn = document.getElementsByClassName("search-engine")[0];
var clear = document.getElementsByClassName("clear")[0];
var searchInput = document.getElementsByClassName("inputtext")[0];
var bboxend = document.getElementsByClassName("bboxend")[0];


scbtn.onclick = function(){
	bbox.style.display='inline';
	bbox.style.animation='popin .3s ease';
	bboxend.style.display='inline';
}

bboxend.onclick =function(){
	bbox.style.display='inline';
	bboxend.style.display='inline';
}

sc.onclick = function(){
	bbox.style.display='none';
	clear.style.display='inline';
}

sc.oninput = function(){
	clear.style.display='inline';
}

clear.onclick = function(){
	searchInput.value='';
	sc.focus();
}


document.addEventListener("click", function(e){
	if( e.target !== sc ){
		clear.style.display = "none";
	}
})

window.onload = function(){
	// scbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1{fill:#400af4;}</style></defs><title>quark</title><g><g><path class="cls-1" d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM37.75,26c-.22,3.9-1.68,3.48-4.91,3.68A3.94,3.94,0,0,0,29.19,33c-.45,3.26.59,4.61-3.7,4.75-5.4.17-11.33-3.93-12.77-9.14A12.82,12.82,0,0,1,27.91,12.54C33.8,13.84,38.09,20,37.75,26Z"/></g></g></svg>';
	// scbtn.innerHTML='';
	scbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="context-fill" fill-opacity="context-fill-opacity"><path d="m10.089 10.973 3.845 3.844a.62.62 0 0 0 .883-.001.625.625 0 0 0-.001-.884L10.983 10.1l.006-.427A5.5 5.5 0 1 0 1 6.5 5.5 5.5 0 0 0 6.5 12c1.189 0 2.288-.38 3.187-1.022l.402-.005zM6.5 10.75c-2.343 0-4.25-1.907-4.25-4.25S4.157 2.25 6.5 2.25s4.25 1.907 4.25 4.25-1.907 4.25-4.25 4.25z"/></svg>';
	/*搜索logo*/

	// btn.style.background="#3245df";
}



seBox[0].onclick = function(){
	scc.action="https://www.baidu.com/s";
	sc.name='wd';
	bboxend.style.display='none';
	bbox.style.display='none';
	scbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.6 54"><defs><style>.cls-1{fill:#3245df;}</style></defs><title>bd</title><g><g><path class="cls-1" d="M7.51,28.47c5.87-1.26,5.07-8.28,4.89-9.81-.28-2.36-3.06-6.5-6.84-6.18C.81,12.91.1,19.77.1,19.77-.53,22.94,1.65,29.73,7.51,28.47Zm6.25,12.21a4.85,4.85,0,0,0-.22,2.86,3.23,3.23,0,0,0,2.79,2.58h1.35a1.72,1.72,0,0,0,1.73-1.73V40.32a1.73,1.73,0,0,0-1.73-1.73H16.43a1.57,1.57,0,0,0-.61.11,3.58,3.58,0,0,0-2.06,2Zm4.66-24c3.24,0,5.87-3.72,5.87-8.35S21.66,0,18.42,0s-5.87,3.73-5.87,8.34S15.18,16.69,18.42,16.69Zm14,.56c4.34.56,7.14-4.07,7.68-7.56s-2.24-7.56-5.3-8.27S27.86,5.64,27.5,8.86C27.08,12.77,28.05,16.69,32.39,17.25ZM43,37.87s-6.72-5.18-10.63-10.8c-5.31-8.27-12.85-4.9-15.37-.71s-6.43,6.87-7,7.57S1.92,38.7,3.6,46.12s7.54,7.29,7.54,7.29a32.41,32.41,0,0,0,9.37-.7,19.76,19.76,0,0,1,9.36.27s11.74,3.93,15-3.64S43,37.87,43,37.87ZM22.92,49.13H15.49a1.92,1.92,0,0,1-.41-.05,6.59,6.59,0,0,1-4.57-3.25,8.79,8.79,0,0,1-.64-5.09,2.11,2.11,0,0,1,.09-.36,6.7,6.7,0,0,1,5.32-4.75h2.46a1.72,1.72,0,0,0,1.72-1.73v-1.5a1.73,1.73,0,0,1,1.76-1.73h0a1.72,1.72,0,0,1,1.7,1.73V49.13Zm14.23,0H28.61a1.73,1.73,0,0,1-.5-.07c-2.6-.77-3.17-2.46-3.29-3a1.73,1.73,0,0,1,0-.32v-7.9a1.72,1.72,0,0,1,1.71-1.72h.11a1.73,1.73,0,0,1,1.75,1.73v7c.22.94,1.37,1.1,1.37,1.1h1.89a1.73,1.73,0,0,0,1.73-1.73V37.8a1.73,1.73,0,0,1,1.73-1.73h.34a1.74,1.74,0,0,1,1.73,1.73V49.09ZM49.57,23.14c0-1.67-1.38-6.73-6.57-6.73s-5.87,4.77-5.87,8.14c0,3.22.27,7.7,6.7,7.56s5.74-7.28,5.74-9Z"/></g></g></svg>';
	// btn.style.background="#3245df";
}
seBox[1].onclick = function(){
	scc.action="https://cn.bing.com/search";
	sc.name='q';
	bboxend.style.display='none';
	bbox.style.display='none';
	scbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.76 54"><defs><style>.cls-1{fill:#038374;}</style></defs><title>bing</title><g><g><path class="cls-1" d="M0,0,10.88,3.77V41.7l15-8.71-7.38-3.53L13.86,17.89l23.87,8.32,0,12.19L10.78,54,0,47.94S0-.34,0,0Z"/></g></g></svg>';
	// btn.style.background="#038374";
}

seBox[3].onclick = function(){
	scc.action="https://www.sogou.com/web";
	sc.name='query';
	bboxend.style.display='none';
	bbox.style.display='none';
	scbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.98 54"><defs><style>.cls-1{fill:#fd6e17;}</style></defs><title>sugo</title><g><g><path class="cls-1" d="M47.59,43.61a21.8,21.8,0,0,1-4.18,4.13,2.37,2.37,0,0,0-.24,3.59h0a2.36,2.36,0,0,0,3.08.2,27.1,27.1,0,0,0,5.1-5.05,2.38,2.38,0,0,0-.22-3.13h0A2.37,2.37,0,0,0,47.59,43.61Z"/><path class="cls-1" d="M40.79,18.34c.11-.15,2.13-3.19-4.73-4.85S12,12,12,20.59s16.46,8.94,18.9,11,.06,4.68-7,3.91S13.21,31.79,11.79,35,16.42,40.9,27.42,41s15.1-5.14,15.1-8.46-4.79-7-13.56-9.12-7.75-4-4.69-5.44,10.41.69,12.5,1.19C39.05,19.65,40,19.5,40.79,18.34Z"/><path class="cls-1" d="M37.7,46.51a22.22,22.22,0,1,1,8.69-8.6,2.17,2.17,0,0,0,.52,2.77l.32.25a2.15,2.15,0,0,0,3.22-.6A26.92,26.92,0,1,0,40.08,50.62a2.16,2.16,0,0,0,.67-3.17l-.25-.32A2.16,2.16,0,0,0,37.7,46.51Z"/></g></g></svg>';
	// btn.style.background="#fd6e17";
}

seBox[2].onclick = function(){
	scc.action="https://quark.sm.cn/s";
	sc.name='q';
	bboxend.style.display='none';
	bbox.style.display='none';
	scbtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1{fill:#400af4;}</style></defs><title>quark</title><g><g><path class="cls-1" d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM37.75,26c-.22,3.9-1.68,3.48-4.91,3.68A3.94,3.94,0,0,0,29.19,33c-.45,3.26.59,4.61-3.7,4.75-5.4.17-11.33-3.93-12.77-9.14A12.82,12.82,0,0,1,27.91,12.54C33.8,13.84,38.09,20,37.75,26Z"/></g></g></svg>';
	// btn.style.background="#400af4";
}

seBox[4].onclick = function(){
    scc.action = "https://www.google.com/search"; // 修改为 Google 搜索的 URL
    sc.name = 'q'; // Google 搜索的关键字参数名称
    bboxend.style.display = 'none';
    bbox.style.display = 'none';
    scbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1 {fill: #FBBC05;}.cls-2 {fill: #EA4335;}.cls-3 {fill: #34A853;}.cls-4 {fill: #4285F4;}</style><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use href="#a" overflow="visible"/></clipPath><title>Google Logo</title><g clip-path="url(#b)"><path class="cls-1" d="M0 37V11l17 13z"/><path class="cls-2" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path class="cls-3" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path class="cls-4" d="M48 48L17 24l-4-3 35-10z"/></g></svg>'; // 替换为 Google Logo
}