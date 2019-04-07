var buttons = $("#button > span")
var images = $('#images > img')

for (let i = 0; i < images.length; i++) {
    $(buttons[i]).on('click', function (clickEvent) {

        // 获取当前点击按钮的基数
        let index = $(clickEvent.currentTarget).index()

        // 计算当前图片的位移值
        let px = index * -640

        // 这个图片流整体左移
        $('#images').css({
            transform: 'translate(' + px + 'px)'
        })

        // 点击时重置轮播，从当前index开始
        n = index
        activeButton(buttons.eq(n))
    })

}

var n = 0   // 自然增长序列
var size = buttons.length   // 按钮总数 
var timerId = setTimer()

// 鼠标移入，轮播中止，“砸掉闹钟”
$('.window').on('mouseenter', function () {
    $('.window').css('cursor', 'pointer')
    window.clearInterval(timerId)
})

// 鼠标移出，轮播恢复，“重启闹钟”
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})

$('#button>span').on('mouseenter', function () {
    $('#button>span').css('cursor', 'pointer')
})

function playSilde(index) {

    // 找到当前button的index，封装成jq对象，然后自动触发点击事件轮播
    buttons.eq(index).trigger('click')
}

function activeButton($button) {
    $button
        .addClass('bigger')
        .addClass('bold')
        .siblings('.bigger').removeClass('bigger')
        .removeClass('bold')
}

function setTimer() {
    return setInterval(() => {
        n++
        // n % size 取余，以达到循环效果
        playSilde(n % size)
    }, 2333)
}