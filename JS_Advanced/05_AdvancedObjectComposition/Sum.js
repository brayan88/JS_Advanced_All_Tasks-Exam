/**
 * Created by el on 4.11.2016 г..
 */
(function operations() {
    let model = (()=> {
        let obj = {
            init: ()=> {
                obj.num1 = $('#num1').val();
                obj.num2 = $('#num2').val();
                obj.result = $('#result').val();
            },
            add: ()=> {
                obj.result = obj.num1 + obj.num2;
            },
            subtract: ()=> {
                obj.result = obj.num1 - obj.num2;
            }
        }
        return obj;
    })()
    let getModel = model();
    let btnSum = $('#sumButton').click(getModel.add);
    let btnSum = $('#subtractButton').click(getModel.subtract);
}())