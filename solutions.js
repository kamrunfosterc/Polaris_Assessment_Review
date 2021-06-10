// Write your Solutions here!!
function doingJavaScriptRightNow(){
    return true;
} // #1 completed

function onMarsRightNow(){
    return false;
}// #2 completed

function sayHello(value){
    if (typeof(value) === "string") { //could also make (typeof name === "string" && isNaN(name))
        if(isNaN(value)){ //nested if statement
            return "Hello, " + value + "!";
        }
        return "Hello, world!";
    } else {
        return "Hello, world!";
    }
} //#3 complete

function plusTwo(numb){
    var new_numb = Number(numb) + 2;

    if (typeof numb === 'number' || NaN){
        return new_numb;
    } else if(numb === 'null' || 'undeclaried'){
        return NaN;
    }
    else {
        return NaN;
    }

}// partial

function addOne(value){
   if (value) {
       return Number(value) + 1;
   } else {
       return NaN;
   }
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
    var iNumberic = Number(i);
    if(i === iNumberic){
        return true;
    }
    if (typeof i === NaN){
        return false;
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
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A','E','I','O','U'];
    if (par === vowel) {
        return true;
    } else {
        return false;
    }
} // #10 defined