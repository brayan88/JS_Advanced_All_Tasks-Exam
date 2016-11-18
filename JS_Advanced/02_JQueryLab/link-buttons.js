/**
 * Created by el on 24.10.2016 г..
 */
function attachEvents() {
    $('a.button').click(function (event) {
        $('.selected').removeClass('selected');
        $(this).addClass('selected')
    })
}