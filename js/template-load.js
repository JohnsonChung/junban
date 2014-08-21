// Code goes here

$(window).load(function() {
    $("#button1").click(function() {
        //樣板資料
        var someData = {
            title: "I am button1",
            listArray: ["a", "b", 3, 4, 5]
        };

        var template = getTemplate(this); //取得樣板函數
        setContent(template(someData)); //指定內容
    });

    // 自動抓取 html button 數量
    var count = $('[data="template-count"]').children().length;
    console.log("template button: " + count);
    for (var i = count; i >= 0; i--) {
        $("#button" + i).bind('click', function() {
            var template = getTemplate(this);
            setContent(template());
            fadeOutLeft($('#content').children()[0], 1);
        })
    };
});

function getTemplate(that) {
    var target = $(that).data('target');
    var html = $("#" + target).contents().find("html").html();
    var template = Handlebars.compile(html);
    return template;
}

function setContent(html) {
    setTimeout(function() {
        $("#content").html(html);       
        flipInX($('#content').children()[0], 1);
    }, 900);
}
