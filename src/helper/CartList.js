let CartList  =  new Array();
function AddCart (product){
    CartList.push(product);
    try{
    localStorage.removeItem("Cart")
    localStorage.setItem("Cart",JSON.stringify(CartList));}
    catch(e){
        console.log(e);
    }
}

function returnCart(){
    try{
    let CartItem= localStorage.getItem("Cart");
    // console.log( JSON.parse(CartItem))
    return JSON.parse(CartItem)
    }
    catch(e){
        console.log(e);
    }
}

function DeleteCart (){
    try{
        localStorage.removeItem("Cart");
        CartList = [];
    }catch(e){
        console.log(e);
    }
}
export default {returnCart,AddCart,DeleteCart}