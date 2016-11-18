/**
 * Created by el on 5.11.2016 г..
 */
function solve(nameArg,ageArg,weightArg,heightArg) {
    let BMI = Math.round(weightArg/(Math.pow(heightArg/100,2)));
    let personalInfo ={
        age:ageArg,
        weight:weightArg,
        height:heightArg
    };
    let patient = {
        name : nameArg,
        personalInfo : personalInfo,
        BMI : BMI
    };
    switch (true){
        case (BMI<18.5):
            patient.status="underweight";
            break;
        case (BMI<25):
            patient.status="normal";
            break;
        case (BMI<30):
            patient.status="overweight";
            break;
        case (BMI>=30):
            patient.status="obese";
            patient.recommendation="admission required";
            break;
        default:
            break;
    }
    return patient;
}

console.log(solve("Peter",28, 85, 183));