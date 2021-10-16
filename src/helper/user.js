const userhistory = (data)=>{
    //const user = UserAction(USER_DETAILS_REQUEST,auth.currentUser.email)
    switch(data){
        case 'order_history' : return false;break;
        default : return 'user passed action : ' + data;
    }
}
module.exports = {
    userhistory
}