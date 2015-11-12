$(function(){
        $('#box').click(function(){
            init_screen()
        });
});
//初始化弹幕

function init_screen(){
    var _top=50;
    $('.dm').fadeIn(1000);
    $(".d_show").find("div").show().each(function(){
        var _left=$(window).width();
        var _height=$(window).height();
        var _width=$(this).width();
        _top=_top+$(this).height();

        if(_top>=_height-70){
            _top=$(this).height();
        }

        $(this).css({left:_left,top:_top,width:$(this).width()+'px',color:getReandomColor()});

        var time=6000+($(this).index()%7)*1000;

        $(this).animate({left:"-"+_width+"px"},time,function(){
            if (time==8000) {
               $('.dm').fadeOut(1000)
            };
        });
    });
}

//随机获取颜色值
function getReandomColor(){
    return '#'+(function(h){
        return new Array(7-h.length).join("0")+h
    })((Math.random()*0x1000000<<0).toString(16))
}

// 调用多说接口获取内容
$.get('http://xyzblog.duoshuo.com/api/posts/list.json',{},function(data){
    for(var i in data.response){
        $(".d_show").append('<div>'+data.response[i].message+'</div>') 
    }
},'json')