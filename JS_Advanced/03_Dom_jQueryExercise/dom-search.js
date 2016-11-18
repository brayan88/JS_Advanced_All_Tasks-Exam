/**
 * Created by el on 28.10.2016 г..
 */
function domSearch(selector,caseSens){
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let caseSensitive = $(caseSens);
    let addControls =$('<div>').addClass('add-controls');
    let searchControls =$('<div>').addClass('search-controls');
    let resultControls =$('<div>').addClass('result-controls');


    (function commands() {

        let labelAdd = $('<label>').text("Enter Text:");
        let inputAdd =$('<input>');
        let inputSearch =$('<input>');
        let list =$('<ul>').addClass("items-list");
        let btn = $('<a>').addClass('button').css("display","inline-block").text("Add");
        let labelSearch = $('<label>').text("Search:");
        btn.click(function () {
            let li =$('<li>').addClass("list-item");
            let liBtn = $('<a>').addClass("button").text("X");
            let strong =$('<strong>').text(inputAdd.val());
            li.append(liBtn)
                .append(strong);
            list.append(li);
            resultControls.append(list);
            liBtn.click(function () {
                li.remove()
            })
        });
        addControls.append(labelAdd.append(inputAdd))
            .append(btn);
        searchControls.append(labelSearch.append(inputSearch));

    })();
    let searchVal = $('.search-controls label').val();
    console.log(searchVal)
    addControls.appendTo(fragment);
    searchControls.appendTo(fragment);
    resultControls.appendTo(fragment);
    container.append(fragment);


    // (function search() {
    //
    //     if(inputSearch.val()){
    //         let str =inputSearch.val();
    //         for(let li of list){
    //             if(li.indexOf(str)==-1)
    //                 $(li).css("display","none");
    //             else {
    //                 $(li).css("display","inline");
    //             }
    //         }
    //     }
    // })()
}