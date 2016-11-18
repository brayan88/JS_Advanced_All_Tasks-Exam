/**
 * Created by el on 26.10.2016 г..
 */
let createBook=(function createBook() {
    let counter = 1;
    return function (selector, title, author, ISBN) {
        let id = "book" + counter;
        let container = $(selector);
        let fragment =document.createDocumentFragment();
        let div = $('<div>');
        div.attr('id',id).css('border','medium none');
        let titleP = $('<p>').text(title);
        titleP.addClass("title");
        let authorP = $('<p>').text(author);
        authorP.addClass("author");
        let isbnP = $('<p>').text(ISBN);
        isbnP.addClass("isbn");
        let btn1 = $('<button>').text("Select");
        let btn2 = $('<button>').text("Deselect");

        div.append(titleP)
            .append(authorP)
            .append(isbnP)
            .append(btn1.click(select))
            .append(btn2.click(deselect));

        function select() {
        div.css("border","2px solid blue")
        }
        function deselect() {
            div.css("border","medium none")
        }

        div.appendTo(fragment);
        container.append(fragment)
        counter++;
    };

}());