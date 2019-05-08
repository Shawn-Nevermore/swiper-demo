$(document).ready(function () {

    var totWidth = 0
    var positions = new Array()

    $('#slides .slide').each(function (i) {

        /* Traverse through all the slides and store their accumulative widths in totWidth */
        // 遍历所有slide，然后将累加宽度添加至totWidth

        positions[i] = totWidth
        totWidth += $(this).width()

        /* The positions array contains each slide's commulutative offset from the left part of the container */
        // 该位置数组包含每个slide的累积offset，即从父元素最左边开始的距离

        if (!$(this).width()) {
            alert("Please, fill in width & height for all your images!")
            return false
        }

    })

    $('#slides').width(totWidth)

    /* Change the container div's width to the exact width of all the slides combined */
    // 改变容器div的宽度为所有slide的准确宽度值总和

    $('#menu ul li a').click(function (e, keepScroll) {

        $('li.menuItem').removeClass('act').addClass('inact')
        $(this).parent().addClass('act')

        var pos = $(this).parent().prevAll('.menuItem').length

        $('#slides').stop().animate({ marginLeft: -positions[pos] + 'px' }, 450)

        // 阻止Link默认跳转
        e.preventDefault()

        // 点击停止自动轮播
        if (!keepScroll) clearInterval(itvl)
    })

    $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact')


    var current = 1;
    function autoAdvance() {
        if (current == -1) return false;

        $('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]);	// [true] will be passed as the keepScroll parameter of the click function on line 28
        current++;
    }

    // The number of seconds that the slider will auto-advance in:

    var changeEvery = 3;

    var itvl = setInterval(function () { autoAdvance() }, changeEvery * 1000);

})