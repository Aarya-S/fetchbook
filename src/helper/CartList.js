let CartList  =  new Array();
function addCart (product){
    CartList.push(product)
}
function returnCart(){
    return CartList;
}
export default {returnCart,addCart}