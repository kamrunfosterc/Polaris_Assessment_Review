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
    } //1st if statement.. if (typeof(value) === 'string' && value !== '' && isNaN(value)){ // alt method
} //#3 complete

function plusTwo(numb){
    //var new_numb = Number(numb) + 2;
    return parseInt(numb) + 2;// simpliest way
    // if (typeof numb === 'number' || NaN){
    //     return new_numb;
    // } else if(numb === 'null' || 'undeclaried'){
    //     return NaN;
    // }
    // else {
    //     return NaN;
    // }

}// #4 complete

function addOne(value){
    return parseInt(value) + 1;
    // best practice is to use parseFloat on this one
}// #5 completed



function isPositive(value){// complete
    var answer = parseFloat(value);// parseFloat better than Number & parseInt here to avoid erros
    if (isNaN(answer)){
        return NaN;
    }
        return (answer > 0);
} // #6 complete

function isNegative(value) {// completed
    var answer = parseFloat(value);// parseFloat here to avoid erros
    if (isNaN(answer)){
        return NaN;
    }
    return (answer < 0);
} // #7 complete

function isNumeric(value){
    let answer = parseFloat(value);
    return !isNaN(answer);
    //return (isNaN(i));

}// #8 complete

function isNotNumeric(value){
    return !isNumeric(value);

}// #9 complete

function isVowel(vow){
    if (typeof vow !== 'string') {
        return false;
    }

    vow = vow.toUpperCase();
    switch (vow){
        case 'A' :
            return true;
        case 'E' :
            return true;
        case 'I' :
            return true;
        case 'O' :
            return true;
        case 'U' :
            return true;
    }
    return false;
} // #10 complete