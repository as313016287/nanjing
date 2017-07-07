/**
 * 根据id获取元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && prev.nodeType !== 1) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}

/**
 * 获取任意对象的内部文本（兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 设置任意对象的内部文本 （兼容所有浏览器）
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 获取第一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取最后一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 *
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
};
/**
 * 
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json){
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            }else if (k === "zIndex"){
                obj.style.zIndex = json[k];
            }else{
                var leader = parseInt(getStyle(obj,k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !==target) {
                flag = false;
            }
        }
        if (flag){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }
    },10)
}
function animate2(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json){
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            }else if (k === "zIndex"){
                obj.style.zIndex = json[k];
            }else{
                var leader = parseInt(getStyle(obj,k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !==target) {
                flag = false;
            }
        }
        if (flag){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }
    },3)
}
function animate3(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json){
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            }else if (k === "zIndex"){
                obj.style.zIndex = json[k];
            }else{
                var leader = parseInt(getStyle(obj,k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !==target) {
                flag = false;
            }
        }
        if (flag){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }
    },18)
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 *
 * @param obj
 * @param target
 */
function animate1(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 15;
        step = leader < target ? step : -step;
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.height = leader + "px";
        } else {
            obj.style.height = target + "px";
            clearInterval(obj.timer);
        }
    }, 15)
}