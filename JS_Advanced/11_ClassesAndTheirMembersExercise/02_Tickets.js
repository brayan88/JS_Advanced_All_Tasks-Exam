function manageTickets() {
    let arr = [...arguments][0];
    let criteria = arguments[1];

    let resultArr=[];
    class Ticket {
        constructor(destination,price,status){
            this.destination=destination;
            this.price=Number(price);
            this.status=status;
        }

    }
    function sortTickets (a,b,criteria) {
        switch (criteria){
            case "destination":
                return a.destination.localeCompare(b.destination)
            case "price":
                return a.price-b.price
            case "status":
                return a.status.localeCompare(b.status)
        }
    }

    for (let ticket of arr){
        // console.log(ticket)
        let [destination,price,status]=ticket.split("|");
        let t = new Ticket(destination,price,status)
        resultArr.push(t)
    }
    resultArr.sort((a,b)=>sortTickets(a,b,criteria))
    return resultArr

}
manageTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination')