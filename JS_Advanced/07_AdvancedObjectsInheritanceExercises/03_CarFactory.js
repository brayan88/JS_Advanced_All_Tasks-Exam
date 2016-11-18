/**
 * Created by el on 8.11.2016 г..
 */
function modifyCar(request) {
    let engine ={};
    let carriage ={
        type:request.carriage,
        color:request.color
    };
    let wheels =[];
    if(request.wheelsize%2==0){
        for (let i = 0; i < 4; i++) {
            wheels.push(request.wheelsize-1)
        }
    }
    else{
        for (let i = 0; i < 4; i++) {
            wheels.push(request.wheelsize)
        }
    }
    switch (true){
        case (Number(request.power)<=90&&Number(request.power)<110):
            engine.power=90;
            engine.volume=1800;
            break;
        case (Number(request.power)<160&&Number(request.power)>=110):
            engine.power=120;
            engine.volume=2400;
            break;
        case (Number(request.power)>=200&&Number(request.power)>=160):
            engine.power=200;
            engine.volume=3500;
            break;
    }
    return {
        model:request.model,
        engine:engine,
        carriage:carriage,
        wheels :wheels
    }

}
let request={ model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21 };
console.log(modifyCar(request))
