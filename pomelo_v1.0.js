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
        }else if(/^\d*$/.test(selector)){
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
//DOM操作函数
    pomelo.fn.html=function(){

        return this.node.innerHTML;
    };
    pomelo.fn.countDown=function(time){
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
    };
    pomelo.fn.toTop=function(){
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
        function doBack(){
            nowNode.onclick=backup;
        }
        return doBack();
    };
    window.pomelo=window.tt=pomelo;
})();
