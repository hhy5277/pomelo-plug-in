/**
 * Created by pomelott on 2017/3/20 0020.
 */
(function(){
    var pomelo = function(selector){
        return new pomelo.init(selector);
    };
    pomelo.init=function(selector){
        if(/^#/.test(selector)){
            selector = selector.substring(1);
            this.node=document.getElementById(selector);
        }else if(/^\./.test(selector)){
            selector = selector.substring(1);
            this.node=document.getElementsByClassName(selector);
        }else if(/^\w*$/.test(selector)){
            this.node=document.getElementsByTagName(selector);
        }
    };
    pomelo.fn=pomelo.prototype=pomelo.init.prototype;
    pomelo.fn.extends=function(obj){
        for(var i in obj){
            pomelo.fn[i]=obj[i];
        }
    };
    pomelo.extends=function(obj){
        for(var i in obj){
            pomelo[i]=obj[i];
        }
    };
///工具函数
    (function(){
        console.log("Welcome to pomelo world ! ")
    })();
    var getScrollTop=pomelo.getScrollTop=function(){
        var fromTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
        return fromTop;
    };
    var changeScrollTop=pomelo.changeScrollTop=function(num){
        if(document.documentElement.scrollTop){
            document.documentElement.scrollTop+=num;
        }
        else if(document.body.scrollTop){
            document.body.scrollTop+=num;
        }
        else{
            window.pageYOffset+=num;
        }
    };
    var doAjax=pomelo.doAjax=function(obj){
        var xhr;
        if(typeof obj.callback!="function"){
            throw "callback is not a function";
        }
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject("Microsoft.XMLHTTP")
        }
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                    obj.callback(xhr);
            }
        };
        if(obj.method=="get"){
            obj.url = obj.url+"?"+obj.data;
        }
        if(obj.sync==undefined){
            obj.sync=true;
        }
        xhr.open(obj.method,obj.url,obj.sync);
        if(obj.method=="post"){
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(obj.data);
        }else{      //get
            xhr.send(null);
        }
    };
//DOM操作函数
    pomelo.init.prototype={
        p_test:function(){
            console.log("pomelo plug-in is ready!");
            return this;
        },
        p_html:function(str){
            if(arguments.length==0){
                return this.node.innerHTML;
            }else{
                var nowNode=this.node;
                for(var i in nowNode){
                    nowNode[i].innerHTML=str;
                }
            }
            return this;
        },
        p_toTop:function(){
            var timer;
            var nowTop;
            var nowNode=this.node;
            function backTo(){
                var tellScroll;
                tellScroll=getScrollTop();
                if (tellScroll==0||tellScroll>nowTop){
                    clearInterval(timer)
                }else {
                    changeScrollTop(-500);
                    nowTop=getScrollTop();
                }
            }
            function backup(){
                nowTop=getScrollTop();
                timer=setInterval(backTo,50)
            }
            (function doBack(){
                nowNode.onclick=backup;
            })();
            return this;
        },
        p_countDown:function(time){
            var timer;
            var hours,minutes,seconds;
            var nowNode=this.node;
            timer=setInterval(function(){
                if(time==0){
                    clearInterval(timer);
                }
                hours=parseInt((time/60)/60);
                minutes=parseInt((time/60)%60);
                seconds=parseInt(time%60);
                hours=hours>9?hours:"0"+hours;
                minutes=minutes>9?minutes:"0"+minutes;
                seconds=seconds>9?seconds:"0"+seconds;
                nowNode.innerHTML=""+hours+":"+minutes+":"+seconds;
                time--;
            },1000);
            return this;
        },
        p_get:function(){
            return this.node;
        },
        p_val:function(){
            return this.node.value;
        },
        p_click:function(fun){
            this.node.onclick=fun;
            return this;
        },
        p_mouseover:function(fun){
            this.node.onmouseover=fun;
            return this;
        },
        p_mouseout:function(fun){
            this.node.onmouseout=fun;
            return this;
        }
    };

    window.pomelo=window.tt=pomelo;
})();
