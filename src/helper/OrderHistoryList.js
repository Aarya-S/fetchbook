let OrderHistoryList  =  new Array();
function AddOrderHistory (product){
    OrderHistoryList.push(product);
    try{
    localStorage.removeItem("OrderHistory")
    localStorage.setItem("OrderHistory",JSON.stringify(OrderHistoryList));}
    catch(e){
        console.log(e);
    }
}

function returnOrderHistory(){
    try{
    let CartItem= localStorage.getItem("OrderHistory");
    // console.log( JSON.parse(CartItem))
    return JSON.parse(CartItem)
    }
    catch(e){
        console.log(e);
    }
}

function DeleteOrderHistory (){
    try{
        localStorage.removeItem("OrderHistory");
        OrderHistoryList = [];
    }catch(e){
        console.log(e);
    }
}
export default {returnOrderHistory,AddOrderHistory,DeleteOrderHistory}