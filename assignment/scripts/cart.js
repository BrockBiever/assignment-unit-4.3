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
    for( let i = 0; i<=arr.length; i++)
    console.log(arr) ;
console.log(arr[0]) ; 
console.log(arr[1]) ; 
console.log(arr[2]) ; 
console.log(arr[3]) ;
console.log(arr[4]) ;
 function emptyBasket(arr){
    arr.shift[0] ;
    arr.shift[1] ;
    arr.shift[2] ;
    arr.shift[3] ;
    arr.shift[4] ;
 }
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
