// My solution:

//    Print all your results to the console
//    Declare two variables apples and oranges. Assign a value of 20 to apples. Assign a value of 30 to oranges.
let apples = 20;
let oranges = 30;
//    Check whether apples and oranges are equal.
console.log(apples === oranges);
//    Check whether apples and oranges are not equal.
console.log(apples!=oranges);
//    Check whether apples is greater than oranges.
console.log(apples>oranges);
//    Check whether apples is less than or equal to oranges.
console.log(apples<=oranges);
//    Check whether oranges is greater than apples.
console.log(oranges>apples);
//    Declare another variable mangoes and give it a value of 5. Multiply mangoes by apples, and check whether this result is greater than mangoes added to oranges.
let mangoes = 5;
console.log(mangoes*apples>mangoes+oranges);
//    Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
console.log(apples-mangoes<oranges/mangoes);
//    Check whether mangoes, apples and oranges are equal.
console.log(mangoes===apples ? apples===oranges: false);
//    Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log(apples%mangoes===oranges%mangoes);
//    Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
console.log(mangoes+apples>oranges-mangoes);
console.log(mangoes+apples<=oranges-mangoes);
//    BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
