/**
 * Created by Administrator on 2017/8/16.
 */
$(function () {
    $('#category').on('click','.category_p>li>a',function () {
        $(this).parent().find('ul').toggle();
        $(this).parent().siblings().find('ul').slideUp();
        var titleId = $(this).attr('data-title-id');
        $that = $(this);
        categoryC(titleId,$that);
    })
    categoryP();
})

function categoryP() {
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcategorytitle',
        success:function (data) {
            var html = template('category-p',data);
            $('.category_p').html(html);
        }
    })
}
function categoryC(titleId,$that) {
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcategory?titleid='+titleId,
        success:function (data) {
            var html = template('category-c',data);
            $('.category_p>li>ul').html(html);
        }
    })
}
