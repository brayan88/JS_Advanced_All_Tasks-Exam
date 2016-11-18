/**
 * Created by el on 23.10.2016 г..
 */
function initializeTable() {
    let tableCountries =$('#countriesTable');
    fillCountries("Bulgaria","Sofia");
    fillCountries("Germany","Berlin");
    fillCountries("Russia","Moscow");


    $('#createLink').click(function (event) {
        let country = $('#newCountryText').val();
        let capital =$('#newCapitalText').val();
        fillCountries(country,capital)
    });
    let data =$('#countriesTable tr a').toArray();

    function fillCountries(country,capital) {
        let tr = $('<tr>');
        tr.append($('<td>').text(country));
        tr.append($('<td>').text(capital));
            let upLink=$('<a href="#" id="up">[Up]</a>').click(moveUp);
            let downLink=$('<a href="#" id="down">[Down]</a>').click(moveDown);
            let deleteLink=$('<a href="#" id="delete">[Delete]</a>').click(deleteLinks);
        tr.append($('<td>')
            .append(upLink)
            .append(downLink)
            .append(deleteLink)
        );
        $(tr).css('display','none')
        tableCountries.append(tr);
        tr.fadeIn();
        restrictions()
    }
    function deleteLinks() {
        let row =$(this).parent().parent()
        row.fadeOut(row.remove());
        restrictions()
    }
    function moveUp() {
        let row =$(this).parent().parent();
        row.fadeOut(function () {
            row.prev().insertAfter(row);
            row.fadeIn()
            restrictions()
        })
    }
    function moveDown() {
        let row =$(this).parent().parent();
        row.fadeOut(function () {
            row.next().insertBefore(row);
            row.fadeIn()
            restrictions()
        });
    }
    function restrictions() {
        let table = $('#countriesTable tr').toArray();
        $(table).find("td a").css('display','inline')
        $(table[2]).find("td a:contains('Up')").css('display','none');
        $(table[table.length-1]).find("td a:contains('Down')").css('display','none');
    }
}