let n   // 自增变量

init()

setInterval(() => {

    makeLeave(getImage(n))
        // 这里用on会出现bug，即每次transition完都会添加.enter类，因此选择只执行一次
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n++

}, 1666);




/*******************************封装函数************************************* */

// 初始化
function init() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

// 控制n的范围在1~5之间循环
function x(n) {
    let imgCount = $('.images>img').length
    return n = n % imgCount === 0 ? imgCount : n % imgCount
}

// 获取当前图片
function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}


// 状态机
function makeCurrent($node) {
    return $node.removeClass('leave enter').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}
