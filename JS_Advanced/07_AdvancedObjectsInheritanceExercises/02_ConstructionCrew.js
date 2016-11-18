/**
 * Created by el on 8.11.2016 г..
 */
function modifyWorker(worker) {
    if(worker.handsShaking==true){
        let alchAdded= worker.weight*worker.experience*0.1;
        worker.bloodAlcoholLevel+=alchAdded;
        worker.handsShaking=false;
    }
    return worker;
}
let worker=
{ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 2,
    handsShaking: false };
console.log(modifyWorker(worker));
