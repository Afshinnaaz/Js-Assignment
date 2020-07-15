//Question 1
const name = 'Afshin';
console.log('Hello', name); //it writes the message in the console. In this it will write the output as hello afshin
console.clear();//It will clear the console
console.table({'a':1,'b':2});//it wiill make a table which have rows and column

console.count() //this method count the number 
for(let i=0;i<5;i++){
    console.count(i);

    }

console.group('error')//it allow to grup the content in separate block. here it will group the errors

console.time();//it will calculate the amount of time spend by one block or function

console.warn('this is warning')//used display the warning