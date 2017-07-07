$(function () {
    var i0 =0;
    var zIndex =1;
    var timer1 = null;
    function changeBg() {
        timer1 = setInterval(function () {
            i0++;
            if (i0===5){
                i0=0;
            }
            $("#bgChange>a:eq("+i0+")").click();
        },3500)
    }
    changeBg();
    for (var i = 0;i<$("#bgChange>a").length;i++){
        $("#bgChange>a:eq("+i+")").attr("index",i);
        $("#bgChange>a:eq("+i+")").click(function () {
            for (var j=0;j<$("#bgChange>a").length;j++){
                $("#bgChange>a:eq("+j+")").removeClass("cur");
            }
            i0 = $(this).attr("index");
            zIndex++;
            $("#bgChange>a:eq("+i0+")").addClass("cur");
            for (var k=0;k<5;k++){
                $(".con-all-cwh>div:eq("+k+")").animate({"opacity":0.5},300,function () {
                    $(".con-all-cwh>div:eq("+(i0)+")").css("zIndex",zIndex);
                    $(".con-all-cwh>div:eq("+(i0)+")").animate({"opacity":1},300,function () {
                        $(".con-all-cwh>div:eq("+(i0)+")").animate({"opacity":1},2900)
                    });
                });
            }

        })
        $("#bgChange>a:eq("+i+")").mouseover(function () {
            clearInterval(timer1);
            $(this).addClass("cur");
            $("#bgChange>a:eq("+i0+")").addClass("cur");
        })
        $("#bgChange>a:eq("+i+")").mouseout(function () {
            changeBg();
            $(this).removeClass("cur");
            $("#bgChange>a:eq("+i0+")").addClass("cur");
        })
    }
    var j0 = 0;
    $("#changeCwh").click(function () {
        if (j0===0){
            j0=1;
            $("#gHotCwh>ul:eq(0)>li:eq(5)>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},240,function () {
                $("#gHotCwh>ul:eq(0)>li:eq(4)>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},240,function () {
                    $("#gHotCwh>ul:eq(0)>li:eq(3)>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},240,function () {
                        $("#gHotCwh>ul:eq(0)>li:eq(2)>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},240,function () {
                            $("#gHotCwh>ul:eq(0)>li:eq(1)>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},240,function () {
                                $("#gHotCwh>ul:eq(0)>li:eq(0)>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},240,function () {
                                    $("#gHotCwh>ul:eq(0)").css("display","none");
                                    $("#gHotCwh>ul:eq(1)").css("display","block");
                                    $("#gHotCwh>ul:eq(1)>li:eq(0)>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},240,function () {
                                        $("#gHotCwh>ul:eq(1)>li:eq(1)>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},240,function () {
                                            $("#gHotCwh>ul:eq(1)>li:eq(2)>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},240,function () {
                                                $("#gHotCwh>ul:eq(1)>li:eq(3)>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},240,function () {
                                                    $("#gHotCwh>ul:eq(1)>li:eq(4)>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},240,function () {
                                                        $("#gHotCwh>ul:eq(1)>li:eq(5)>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},240)
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }else{
            j0=0;
            for (var j=0;j<$("#gHotCwh>ul:eq(1)>li").length;j++){
                $("#gHotCwh>ul:eq(1)>li:eq("+j+")>div").stop().animate({"width":"0px","height":"0px","top":"159px","left":"150px","opacity":0},800,function () {
                    $("#gHotCwh>ul:eq(1)").css("display", "none");
                    $("#gHotCwh>ul:eq(0)").css("display", "block");
                    for(var k=0;k<$("#gHotCwh>ul:eq(0)>li").length;k++){
                        $("#gHotCwh>ul:eq(0)>li:eq("+k+")>div").stop().animate({"width":"300px","height":"318px","top":"0px","left":"0px","opacity":1},800);
                    }
                })
            }

        }
    })
    for (var i=0;i<$("#conActivityCwh>li").length;i++){
        $("#conActivityCwh>li:eq("+i+")").mouseover(function () {
            $(this).animate({"opacity":0.8},300,function () {
                $(this).animate({"opacity":1},300)
            })
        })
    }
});