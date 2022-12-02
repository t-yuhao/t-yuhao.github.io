# 目录

* [00-毛选](MX/README.md)
* [01-firefox样式](./firefox/)
* [02-浏览器页面](./browser/)

<meta charset="utf-8">
<title>
    TYH
</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="stylesheet" href="https://t-yuhao.github.io/styles/main.css">
<div id="app" class="main">
    <div class="site-header-container">
        <div class="site-header">
            <div class="left">
                <a href="https://t-yuhao.github.io">
                    <img class="avatar" src="favicon.ico" alt="" width="32px" height="32px">
                </a>
                <a href="https://t-yuhao.github.io">
                    <h1 class="site-title">
                        TYH
                    </h1>
                </a>
            </div>
            <div class="right">
                <transition name="fade">
                    <i class="icon" :class="{ 'icon-close-outline': menuVisible, 'icon-menu-outline': !menuVisible }"
                    @click="menuVisible = !menuVisible">
                    </i>
                </transition>
            </div>
        </div>
    </div>
    <div class="content-container">
        <section class="post-item">
            <div class="content">
                <a href="./MX/">
                    <h2 class="post-title">
                        00-毛选
                    </h2>
                </a>
            </div>
            <div class="content">
                <a href="./firefox/00-firefox样式.md">
                    <h2 class="post-title">
                        01-firefox样式
                    </h2>
                </a>
            </div>
            <div class="content">
                <a href="./src/browser.md">
                    <h2 class="post-title">
                        02-浏览器页面
                    </h2>
                </a>
            </div>
        </section>
        <div class="pagination-container">
        </div>
    </div>
    <div class="site-footer">
        <div class="slogan">
        </div>
        <div class="social-container">
            <a href="https://github.com/t-yuhao" target="_blank">
                <i class="fab fa-github">
                </i>
            </a>
            <a href="https://www.zhihu.com/people/T--Y--H" target="_blank">
                <i class="fab fa-zhihu">
                </i>
            </a>
        </div>
        Powered by
        <a href="https://t-yuhao.github.io/" target="_blank">
            TYH
        </a>
    </div>
</div>
<script type="application/javascript">
    hljs.initHighlightingOnLoad() var app = new Vue({
        el: '#app',
        data: {
            menuVisible: false,
        },
    })
</script>