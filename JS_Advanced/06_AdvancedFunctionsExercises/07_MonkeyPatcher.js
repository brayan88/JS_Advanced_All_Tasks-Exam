/**
 * Created by el on 7.11.2016 г..
 */
function solve(input) {
     switch (input){
         case "upvote":
            this.upvotes+=1;
             break;
         case "downvote":
             this.downvotes+=1;
             break;
         case "score":
            return score(this);
     }
    function score(obj) {
        let modifier=0;
        if(obj.upvotes+obj.downvotes>50){
            modifier=Math.ceil(Math.max(obj.upvotes,obj.downvotes)*0.25);
        }
        let rating="";
        let balance =obj.upvotes-obj.downvotes;
        let total = obj.upvotes+obj.downvotes;
        if (total<10)
            rating= "new";
        else if(obj.upvotes/total>0.66)
            rating="hot";
        else{
            if(balance>0&&total>100)
                rating ="controversial";
            else if(balance<0)
                rating="unpopular";
            else
                rating="new";
        }
        return result =[
            obj.upvotes+modifier,
            obj.downvotes+modifier,
            balance,
            rating
        ]
    }
}
let post ={
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}
solve.call(post,"upvote")
console.log(solve.call(post,"score"))
