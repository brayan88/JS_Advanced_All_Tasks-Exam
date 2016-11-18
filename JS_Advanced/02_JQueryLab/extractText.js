/**
 * Created by el on 23.10.2016 г..
 */
function extractText() {

    let items = $('#items li').toArray().map(li=>li.textContent).join(", ");
    console.log(items)
    $('#result').text(items);
}