/**
 * Created by el on 25.10.2016 г..
 */
function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = '<textarea class="counter" disabled="disabled" ></textarea>';
    let incrementBtn = '<button class="btn" id="incrementBtn">Increment</button>';
    let addBtn = '<button class="btn" id="addBtn" >Add</button>';
    let list =$('<ul>').addClass('results');
    $(fragment)
        .append(textArea)
        .append($(incrementBtn).click(increase))
        .append($(addBtn).click(adding))
        .append(list);
    function increase() {
        let val =$('.counter').val();
        $('.counter').val(++val);
    }
    function adding() {
        let num =$('.counter').val();
        let li = $('<li>');
        if(num==0){
            li.text("0");
        }
        else{
            li.text(num);
        }
        list.append(li);
    }
    container.append(fragment)
}