/**
 * Created by el on 13.11.2016 г..
 */
class MailBox {
    constructor(){
        this.mail = {};
    }
    addMessage(subject,text){
        this.mail[subject]=text;
        return this
    }
    get messageCount(){
        return Object.keys(this.mail).length
    }
    deleteAllMessages () {
        return this.mail = {}
    }
    findBySubject (substr){
        let arr=[];
        for (let key of Object.keys(this.mail)){
            if(key.indexOf(substr)!=-1){
                let resultObj={};
                resultObj['subject']= key;
                resultObj['text']= this._mail[key];
                arr.push(resultObj)
            }
        }
        return arr;
    }
    toString (){
        let finalArr=[];
        if(this.mail==0){
            finalArr.push(`* (empty mailbox`)
        }
        else {
            for (let key of Object.keys(this.mail)) {
                finalArr.push(`* [${key}] ${this.mail[key]}`)
            }
        }
        return finalArr.join("\n")
    }
}
let mb = new MailBox();
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log(mb.toString())
mb.deleteAllMessages();
let mb2string = new MailBox()
    .addMessage("Subj 1", "Msg 1")
    .addMessage("Subj 2", "Msg 2")
    .addMessage("Subj 3", "Msg 3")
    .toString();
