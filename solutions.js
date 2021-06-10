// Write your Solutions here!!
function doingJavaScriptRightNow(){
    return true;
} // #1 completed

function onMarsRightNow(){
    return false;
}// #2 completed

function sayHello(value){
    if (typeof name === "string") { //could also make (typeof name === "string" && isNaN(name))
        if(isNaN(name)){ //nested if statement
            return "Hello, " + name + "!";
        }
        return "Hello, world!";// might be good with out

    } return "Hello, world!";
}
//     if (value === 'string'){
//         return "Hello, " + value + "!";
//     } else {
//         return "Hello, world!";
//     }
// } //#3 partially not passing "cook" for some reason

function plusTwo(numb){
    var new_numb = Number(numb) + 2;
    if (numb === 'number'){
        return new_numb;
    } else if (numb == 'undefined'){
        return NaN;
    }else {
        return NaN;
    }

}
function addOne(value){
    return Number(value) + 1;
    // return ++value;
}



function isPositive(value){// complete
    if (value > 0){
        return true;
    } else {
        return false;
    }
} // #6 progress

function isNegative(value) {// completed
    if (value < 0) {
        return true;
    } else {
        return false;
    }
} // #7 progress

function isNumeric(i){
    if(i === Number(i)){
        return true;
    } else{
        return NaN;
    }

}// #8 working

function isNotNumeric(i){
    if(i !== Number(i)){
        return false;
    } else{
        return NaN;
    }

}// #8 working

function isVowel(par){
    // some code
}