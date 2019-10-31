$(function () {
    $('.container').fullpage({
        navigation: true,
        navigationPosition: 'right',
        anchors: ["page1", "page2", "page3", "page4", "page5"], //注意不带#
        menu: "#menu", //绑定菜单，data-menuanchor,才能使用.active
        afterLoad: function (link, index) {
            if (index.index === 2) {
                $(".center").fadeIn(1000)
            }
            if (index.index === 1) {
                $(".info").fadeIn(1000)
                $(".info-text").fadeIn(1000)
            }
        },
        
    });
})

$(document).ready(function () {
    $(".logo").mouseover(function () {
        $(".like").show();
    });
    $(".logo").mouseout(function () {
        $(".like").hide();
    });

});