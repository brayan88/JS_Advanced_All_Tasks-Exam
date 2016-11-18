/**
 * Created by el on 23.10.2016 г..
 */
function search() {
    let pattern = $('#searchText').val();
    let towns =$('#towns li');
    let counter =0;
    for (let t of towns){
        let currTown =t.textContent;
        if (currTown.indexOf(pattern)!=-1){
            $(t).css('font-weight','bold');
            counter++;
        }
        else
            $(t).css('font-weight','')
    }
    $('#result').text(`${counter} matches found.`)
}