export const add = (number1, number2) =>{
    return number1 + number2;
}
export const multiply = (number1, number2) => {
    return number1 * number2;
}
export const subtract = (number1, number2) => {
    return number1 - number2;
}
export const divide = (number1, number2) => {
    if (number2 === 0){
        return "Cannot divide by zero enter another number";
    }else{
    return number1 / number2


    }
}
