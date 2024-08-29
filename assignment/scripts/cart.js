let basket = []
function addItem(arr, item){
   isFull(arr)
   if('false'){
    arr.unshift(item);
    return true} ;
    if('true'){
        return false ;
    }

}
let apple;

addItem(basket,apple);

function listItems(arr){ 
    basket.forEach(item => {
        console.log(item)
    })
    } 

 
function empty(arr){
arr.length = 0 
console.log(arr)
 }


let maxItems = 5; 
function isFull(arr){
if (maxItems<= arr.length){
    return 'true' ;

} ;
if (maxItems> arr.length){
    return 'false' ;

};

}
// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}