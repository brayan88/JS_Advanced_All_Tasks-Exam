/**
 * Created by el on 5.11.2016 г..
 */
let robot =(function () {
    let resources={
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0,
    };
    function restock(ing,qnt) {
        resources[ing]=resources[ing]+qnt;
        return "Success";
    }
    function prepare(meal,qnt) {
        switch (meal){
            case "apple":
                if(resources.carbohydrate>=1*qnt){
                    if(resources.flavour>=2*qnt){
                        resources.carbohydrate=resources.carbohydrate-(1*qnt);
                        resources.flavour=resources.flavour-(2*qnt);
                        return "Success";
                    }else{
                        return "Error: not enough flavour in stock"
                    }
                }else
                    return "Error: not enough carbohydrate in stock";
                break;
            case "coke":
                if(resources.carbohydrate>=10*qnt){
                    if(resources.flavour>=20*qnt){
                        resources.carbohydrate=resources.carbohydrate-(10*qnt);
                        resources.flavour=resources.flavour-(20*qnt);
                        return "Success";

                    }else{
                        return "Error: not enough flavour in stock"
                    }
                }else
                    return "Error: not enough carbohydrate in stock";
                break;
            case "burger":
                if(resources.carbohydrate>=5*qnt){
                    if(resources.fat>=7*qnt) {
                        if (resources.flavour >= 3 * qnt) {
                            resources.carbohydrate = resources.carbohydrate - (5 * qnt);
                            resources.fat = resources.fat - (7 * qnt);
                            resources.flavour = resources.flavour - (3 * qnt);
                            return "Success"
                        } else {
                            return "Error: not enough flavour in stock"
                        }
                    }else {
                        return "Error: not enough fat in stock"
                    }
                }else
                    return "Error: not enough carbohydrate in stock";
                break;
            case "omelet":
                if(resources.protein>=5*qnt){
                    if(resources.fat>=1*qnt) {
                        if (resources.flavour >= 1 * qnt) {
                            resources.protein = resources.protein - (5 * qnt);
                            resources.fat = resources.fat - (1 * qnt);
                            resources.flavour = resources.flavour - (1 * qnt);
                            return "Success"
                        } else {
                            return "Error: not enough flavour in stock"
                        }
                    }else {
                        return "Error: not enough fat in stock"
                    }
                }else
                    return "Error: not enough protein in stock"
                break;
            case "cheverme":
                if(resources.protein>=10*qnt){
                    if(resources.carbohydrate>=10*qnt) {
                        if (resources.fat >= 10 * qnt) {
                            if (resources.flavour >= 10 * qnt) {
                                resources.protein = resources.protein - (10 * qnt);
                                resources.carbohydrate = resources.carbohydrate - (10 * qnt);
                                resources.fat = resources.fat - (10 * qnt);
                                resources.flavour = resources.flavour - (10 * qnt);
                                return "Success"
                            } else {
                                return "Error: not enough flavour in stock"
                            }
                        } else {
                            return "Error: not enough fat in stock"
                        }
                    }else
                        return "Error: not enough carbohydrate in stock";
                }else
                    return "Error: not enough protein in stock"
                break;

        }

    }
    function report() {
        let arr=[];
        for (let key of Object.keys(resources)){
            arr.push(`${key}=${resources[key]}`)
        }
        return arr.join(" ");
    }
    function cmdPrompt(input) {
        let [cmd,args,qnt] =input.split(" ");
        qnt=Number(qnt);
        if (cmd == "restock")
           return restock(args, qnt);
        if (cmd == "prepare")
            return prepare(args, qnt);
        if (cmd == "report") {
            return report()
        }
    }
    return cmdPrompt;
}());
console.log(robot(
    'restock flavour 50'));
console.log(robot(
    'prepare coke 4'));