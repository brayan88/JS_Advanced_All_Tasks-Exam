/**
 * Created by el on 9.11.2016 г..
 */
function generateLinkedList() {
    let storage = [];
    return (function () {

        function getSize() {
            return storage.length;
        }

        function add(element) {
            storage.push(element);
            reSort();
        }

        function remove(index) {
            if (isValidIndex(index)) {
                storage.splice(index, 1);
                reSort();
            } else {
                throw new Error;
            }
        }

        function reSort() {
            storage = storage.sort((a, b) => a - b);
        }

        function isValidIndex(index) {
            return index >= 0 && index < storage.length;

        }

        function get(index) {
            if (isValidIndex(index)) {
                return storage[index];
            } else {
                throw new Error;
            }
        }

        let a = {add, remove, get};
        a.__defineGetter__("size", getSize);
        return a;
    })();
}

let list = generateLinkedList();
console.log(list.hasOwnProperty('size'));
list.add(5);
list.add(8);
list.add(19)
console.log(list.get(0))
