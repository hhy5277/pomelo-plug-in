# pomelo-plug-in
基于原生js的，兼容主流浏览器的，带选择器的，包括工具函数和DOM操作函数的前端库.包含前端开发必备组件<br>
<h3>【持续更新中...跪求点击右上角星星，好人一生平安！】</h3>
<hr>
<h1>组件</h1>
<h2>1.tt(selector).p_toTop()</h2>
返回顶部。
<h2>2.pomelo(selector).p_countDown(time)</h2>
倒计时，time单位为秒。
<hr>
<h1>工具函数</h1>
<h2>1. getScrollTop()</h2>
获取垂直滚动条滚动距离。
<h2>2. changeScrollTop(num)</h2>
改变垂直滚动条距离，正数为增加，负数为减少。
<h2>3. doAjax(obj)</h2>
ajax函数，参数：method(提交方法)、url(执行路由)、data(提交到服务器的数据)、sync(是否异步)、callback(ajax链接成功后执行的函数)。例：<br>
       doAjax({<br>
             method:"post",<br>
             data:"user="+txt+"&pwd="+pwd,<br>
             url:"/testajax.do",<br>
             callback:function(xhr){<br>
                console.log("get ajax communication.")<br>
             });<br>
<hr>
<h1>DOM操作函数</h1>
<h2>1.pomelo(selector)、tt(selector)</h2>
选择器，使用方法与jquery相同,pomelo可由tt代替。例如pomelo("#div1")
<h2>2.tt(selector).p_get()</h2>
获取原生对象
<h2>3.tt(selector).p_html()、tt(selector).p_html(str)</h2>
获取和修改标签内容
<h2>4.tt(selector).p_val()</h2>
获取结点的value值
<h2>5.tt(selector).p_click( function )</h2>
click事件操作函数
<h2>6.tt(selector).p_mouseover( function )</h2>
mouseover事件操作函数
<h2>7.tt(selector).p_mouseout( function )</h2>
mouseout事件操作函数

