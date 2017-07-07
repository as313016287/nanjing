window.onload = function () {
    var conCwh = document.getElementById("conCwh");
    var conCwha = conCwh.children[0];
    var conWrapTopCwh = document.getElementById("conWrapTopCwh");
    var conWrapInCwh = document.getElementById("conWrapInCwh");
    var topOpenCwh = document.getElementById("topOpenCwh");
    var iCwh = topOpenCwh.children[0];
    var spanCwh = topOpenCwh.children[1];
    var topCloseCwh = document.getElementById("topCloseCwh");
    var imgHoverCwh = document.getElementsByClassName("hot-link-cwh");
    var imgHoverVisibleCwh = document.getElementsByClassName("hot-font-cwh");
    var gHotCwh = document.getElementById("gHotCwh");
    var gHotCwhUl1 = gHotCwh.children[0];
    var gHotCwhUl2 = gHotCwh.children[1];
    var gHotCwhLis1 = gHotCwhUl1.children;
    var changes1 = [];
    var changes2 = [];
    var gHotCwhLis2 = gHotCwhUl2.children;
    var changeCwh = document.getElementById("changeCwh");
    var bgChange = document.getElementById("bgChange");
    var box0 = document.getElementById("box0");
    var jCwh = 0;
    // var flagNum = 0;
    // var bgFlag = 0;
    // var bgMouse = 0;
    /*for (var i = 0; i < bgChangeLis.length; i++) {
        bgChangeLis[i].index = i;
        bgChangeLis[i].onclick = function () {
            bgFlag = this.index;
            for (var j = 0; j < bgChangeLis.length; j++) {
                bgChangeLis[j].className = "";
            }
            this.className = "cur";
            box.style.backgroundImage = 'url(images/banner0' + (bgFlag + 1) + '.jpg)';
        }
    }*/
    var timer = null;
   /* var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    function backgroundChange() {
        timer = setInterval(function () {
            bgFlag++;
            for (var j = 0; j < bgChangeLis.length; j++) {
                bgChangeLis[j].className = "";
            }
            bgChangeLis[bgFlag].className = "cur";
            // box.style.backgroundImage = 'url(images/banner0' + (bgFlag + 1) + '.jpg)';
            animate(box+bgFlag,{"left":0},function () {
                animate(box2,{})
            })
            if (bgFlag === 4) {
                bgFlag = -1;
            }
        }, 3500)
    }
    backgroundChange();
    for (var i = 0; i < bgChangeLis.length; i++) {
        bgChangeLis[i].index1 = i;
        bgChangeLis[i].onmouseover = function () {
            clearInterval(timer);
            bgMouse = this.index1;
            for (var j = 0; j < bgChangeLis.length; j++) {
                bgChangeLis[j].className = "";
            }
            this.className = "cur";
            bgChangeLis[bgFlag].className = "cur";
        };
        bgChangeLis[i].onmouseout = function () {
            backgroundChange();
            this.className = "";
            bgChangeLis[bgFlag].className = "cur";
        }
    }*/
    for (var i = 0; i < gHotCwhLis1.length; i++) {
        changes1.push(gHotCwhLis1[i].children[0]);
        changes2.push(gHotCwhLis2[i].children[0]);
    }
    window.onscroll=function () {
        if (scroll().top > 585) {
            for (var i = 0; i < changes2.length; i++) {
                        animate3(changes1[i],{"width":300,"height":318,"top":0,"left":0});
                    }
            }
        }
    /*changeCwh.onclick = function () {
        if (flagNum === 0) {
            animate2(changes1[5], {"left": 150, "top": 159, "height": 0, "width": 0}, function () {
                animate2(changes1[4], {"left": 150, "top": 159, "height": 0, "width": 0}, function () {
                    animate2(changes1[3], {"left": 150, "top": 159, "height": 0, "width": 0}, function () {
                        animate2(changes1[2], {"left": 150, "top": 159, "height": 0, "width": 0}, function () {
                            animate2(changes1[1], {"left": 150, "top": 159, "height": 0, "width": 0}, function () {
                                animate2(changes1[0], {"left": 150, "top": 159, "height": 0, "width": 0}, function () {
                                    gHotCwhUl1.style.display = "none";
                                    gHotCwhUl2.style.display = "block";
                                    animate2(changes2[0], {
                                        "left": 0,
                                        "top": 0,
                                        "height": 318,
                                        "width": 300
                                    }, function () {
                                        animate2(changes2[1], {
                                            "left": 0,
                                            "top": 0,
                                            "height": 318,
                                            "width": 300
                                        }, function () {
                                            animate2(changes2[2], {
                                                "left": 0,
                                                "top": 0,
                                                "height": 318,
                                                "width": 300
                                            }, function () {
                                                animate2(changes2[3], {
                                                    "left": 0,
                                                    "top": 0,
                                                    "height": 318,
                                                    "width": 300
                                                }, function () {
                                                    animate2(changes2[4], {
                                                        "left": 0,
                                                        "top": 0,
                                                        "height": 318,
                                                        "width": 300
                                                    }, function () {
                                                        animate2(changes2[5], {
                                                            "left": 0,
                                                            "top": 0,
                                                            "height": 318,
                                                            "width": 300
                                                        }, function () {
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                })
                            })
                        })
                    })
                })
            })
            flagNum = 1;
        } else {
            for (var i = 0; i < changes2.length; i++) {
                animate(changes2[i],{"width":0,"height":0,"top":159,"left":150,},function () {
                    gHotCwhUl1.style.display = "block";
                    gHotCwhUl2.style.display = "none";
                    for (var j=0;j<changes1.length;j++){
                        animate(changes1[j],{"width":300,"height":318,"top":0,"left":0})
                    }
                })
            }
            flagNum = 0;
        }
    }*/
        for (var i = 0; i < imgHoverCwh.length; i++) {
            imgHoverCwh[i].index = i
            imgHoverCwh[i].onmouseover = function () {
                animate(imgHoverVisibleCwh[this.index], {"height": 170});
            }
            imgHoverCwh[i].onmouseout = function () {
                animate(imgHoverVisibleCwh[this.index], {"height": 0});
            }
        }
        topOpenCwh.onclick = function () {
            if (jCwh === 0) {
                iCwh.style.backgroundPosition = "-34px 0";
                topOpenCwh.style.backgroundColor = "#282b2d";
                spanCwh.style.display = "none";
                conWrapTopCwh.style.display = "block";
                animate(conWrapTopCwh, {"height": 810});
                jCwh = 1;
            } else {
                iCwh.style.backgroundPosition = "0 0";
                topOpenCwh.style.backgroundColor = "#cf1132";
                spanCwh.style.display = "block";
                animate(conWrapTopCwh, {"height": 0}, function () {
                    conWrapTopCwh.style.display = "none";
                })
                jCwh = 0;
            }
        }
        topCloseCwh.onmouseover = function () {
            topCloseCwh.children[0].style.backgroundPosition = "0 -48px";
        }
        topCloseCwh.onmouseout = function () {
            topCloseCwh.children[0].style.backgroundPosition = "0 -34px";
        }
        topCloseCwh.onclick = function () {
            iCwh.style.backgroundPosition = "0 0";
            topOpenCwh.style.backgroundColor = "#cf1132";
            spanCwh.style.display = "block";
            animate(conWrapTopCwh, {"height": 0}, function () {
                conWrapTopCwh.style.display = "none";
            })
            jCwh = 0;
        }
        conCwha.onmouseover = function () {
            this.style.backgroundColor = "#dbdcdf";
        }
        conCwha.onmouseout = function () {
            this.style.backgroundColor = "#f1f1f1";
        }
        conCwha.onclick = function () {
            if (this.innerHTML === "查看更多") {
                conWrapInCwh.style.overflow = "visible";
                animate(conWrapCwh, {"height": 815});
                animate(conWrapInCwh, {"height": 713});
                conCwha.innerHTML = "收起";
            } else {
                conWrapInCwh.style.overflow = "hidden";
                animate(conWrapCwh, {"height": 600});
                animate(conWrapInCwh, {"height": 497});
                conCwha.innerHTML = "查看更多";
            }
        };
        //qiange begin
        var lists = document.getElementById("lists");
        var lis = lists.children;
        var img = lists.getElementsByTagName("img");
        var bigImg = document.getElementById("littleLun");
//var backGroundColorTri = document.getElementById("backgroundcolortri");

        var index = 0;
        for (var i = 0; i < lis.length; i++) {


            lis[i].onmouseover = function () {

                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundColor = "#272A2C";
                }
                this.style.backgroundColor = "#080909";
                lis[index].style.backgroundColor = "#080909";
            };
            lis[i].onmouseout = function () {
                this.style.backgroundColor = "#272A2C";
                lis[index].style.backgroundColor = "#080909";
            };
            lis[i].index = i;
            lis[i].onclick = function () {
                index = this.index;
                bigImg.src = "images/banner-c0" + this.children[0].alt + ".jpg";
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundColor = "#272A2C";
                    lis[j].children[3].style.display = "none";
                }
                this.style.backgroundColor = "#080909";
                this.children[3].style.display = "block";
            };

        }
    }
