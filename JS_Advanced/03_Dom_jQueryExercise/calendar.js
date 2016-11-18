function calendar (input) {
    let div = $('#content');
    let container =document.createDocumentFragment();
    let str= input.join(",");
    let [day,month,year]=str.split(",");
    let date =new Date(year,month-1,day);
    let currDate= new Date(year,month-1,1);
    let currMonth = date.getMonth();
    let firstDay =new Date(year,month-1,1);
    let firstDayOfWeek= firstDay.getDay();
    if(firstDayOfWeek==0)
        firstDayOfWeek=7;
    let heading = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    (function createCalendar() {
        let table =$('<table>');
        let caption= $('<caption>').text(`${months[currMonth]} ${year}`);
        table.append(caption);
        let tbody =$('<tbody>');
        table.append(tbody);
        let rowLenght =7;
        if(firstDayOfWeek==1)
            rowLenght=6;
        for (let row = 0; row < rowLenght; row++) {
            let tr = $('<tr>');
            for (let col = 1; col <= 7; col++) {
                let td = $('<td>');
                if (currDate.getMonth() != date.getMonth())
                    tr.append(td);
                else {
                    if (row == 0) {
                        let th = $('<th>').text(heading[col - 1]);
                        tr.append(th);
                    } else if (row == 1) {
                        if (col < firstDayOfWeek)
                            tr.append(td);
                        else {
                            if (currDate.getDate() == date.getDate()) {
                                td.addClass("today").text(currDate.getDate());
                                tr.append(td);
                            } else {
                                td.text(currDate.getDate());
                                tr.append(td);
                            }
                            currDate.setDate(currDate.getDate() + 1)
                        }

                    } else {
                        if (currDate.getDate() == date.getDate()) {
                            td.addClass("today").text(currDate.getDate());
                            tr.append(td);
                        } else {
                            td.text(currDate.getDate());
                            tr.append(td);
                        }
                        currDate.setDate(currDate.getDate() + 1)
                    }
                }
            }
            table.append(tr);
        }

        div.append(table);
    })();
}
