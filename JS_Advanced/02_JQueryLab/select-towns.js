/**
 * Created by el on 25.10.2016 г..
 */
function attachEvents() {
    $('#items li').click(function () {
        let li = $(this);
        if(li.attr('data-selected')){
            li.removeAttr('data-selected')
            li.css('background',"");
        }
        else {
            li.attr('data-selected','true');
            li.css('background','#DDD')
        }
    });
    listTowns()
    function listTowns() {
        let result =$('#selectedTowns');
        let str=[];
        $('#showTownsButton').click(function () {
            let towns =$('#items li').toArray();
            for (let li of towns){
                if($(li).attr('data-selected')){
                    str.push(li.textContent)
                }
            }
            result.text("Selected towns: "+str.join(","))
        })
    }
}