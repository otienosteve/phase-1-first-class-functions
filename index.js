function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
 
    function named(){

    }

    return named

}
function returnsAnAnonymousFunction (){
    return function(){

    }
}