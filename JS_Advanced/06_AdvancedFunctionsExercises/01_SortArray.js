/**
 * Created by el on 4.11.2016 г..
 */
function sortArray(arr,str) {
    if(str =='asc'){
        return arr.sort((a,b)=>a-b)
    }
    else{
        return arr.sort((a,b)=>b-a)
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'des'));