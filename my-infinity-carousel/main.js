$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')

let imgCount = $('.images>img').length

let n = 1
setInterval(() => {

    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (e) => {    // 这里用on会出现bug，即每次transition完都会添加.enter类，因此选择只执行一次
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('enter').addClass('current')
    console.log(n + 1)

    n++
}, 1666);

function x(n) {
    // return n = n > imgCount ? n%imgCount:n
    if (n > imgCount) {
        n %= imgCount
        if (n === 0) {
            n = imgCount
        }
    }
    return n
}