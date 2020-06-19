//Deandre and Shakir
//shakir.z.aziz@gmail.com
//text eelemnt after array apend that array to that element 
//for loop dont use for looop just apppend each element to the main 
//append main to the dom
const output = document.querySelector('.output')
const parentElement = document.querySelector('.katas-list')
const kata1Heading = document.createElement('h2')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
let arrayOfKatas = [];


// KATA 01 ⮕

 let temp1 = "";
 for (let counter1 = 1; counter1 <= 20; counter1++) {
    temp1 += counter1 + '\n'
}
arrayOfKatas.push(temp1)



//KATA 02 ⮕

let counter2 = 2;
let temp2 = '';
for (counter2; counter2 <= 20; counter2 += 2) {
    temp2 += counter2 + '\n'
    }
console.log(temp2)
arrayOfKatas.push(temp2)



// KATA 03 ⮕ done

let temp3 = '';
for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
  temp3 += counter3 + '\n'
}
arrayOfKatas.push(temp3)



// KATA 04 ⮕
let counter4 = 0;
let temp4 = ''
for (counter4; counter4 <= 100; counter4 += 5) {
  temp4 += counter4+ '\n'
}
arrayOfKatas.push(temp4)


// KATA 05 ⮕

let counter5 =0;
let temp5 = ''
for(counter5; counter5 * counter5 <= 100 ; counter5 +=1){
  temp5 += (counter5*counter5) + '\n';
}
arrayOfKatas.push(temp5)




// KATA 06

let counter6 = 20;
temp6 = ''
while (counter6 > 0) {
  temp6 += counter6 + '\n'
  counter6 -= 1;
}
arrayOfKatas.push(temp6)


//KATA 07 ⮕

let counter7 = 20;
let temp7 = '';
while (counter7 > 0) {
  temp7 += counter7 + '\n'
  counter7 -= 2;
}
arrayOfKatas.push(temp7)



//KATA 08 ⮕

let counter8 = 19;
let temp8 = '';
while (counter8 > 0) {
  temp8 += counter8 + '\n'
  counter8 -= 2;
}
arrayOfKatas.push(temp8)


//KATA 09 ⮕

let counter9 = 100;
let temp9 = ''
while (counter9 > 0) {
  temp9 += counter9 + '\n'
  counter9 -= 5;
}
arrayOfKatas.push(temp9)



//KATA 10 

let counter10 = 10;
let temp10 = ''
while (counter10 > 0) {
  temp10 += (counter10 * counter10) + '\n';
  counter10 -= 1;
}
arrayOfKatas.push(temp10)



//kata 11 
let temp11 = ' '
for(let i =0; i< sampleArray.length; i++)
{
    temp11 += sampleArray[i] + '\n'
}
arrayOfKatas.push(temp11)


//kata 12
let temp12 = ''
for(let i =0; i< sampleArray.length; i++)
{
    if(sampleArray[i]%2 === 0)
    {temp12 += sampleArray[i] + '\n'}
}
arrayOfKatas.push(temp12)



//kata 13
let temp13 = ''
for(let i =0; i< sampleArray.length; i++)
{
    if(sampleArray[i]%2 != 0)
    {temp13 += sampleArray[i] + '\n'}
}
arrayOfKatas.push(temp13)



//kata 14
let temp14 = ' '
for(let i =0; i< sampleArray.length; i++)
{
    temp14 += sampleArray[i]*sampleArray[i] + '\n'
}
arrayOfKatas.push(temp14)



//kata 15
let sumof20 =0
for(let i = 0;i <= 20;i++ )
{
    sumof20 += i
}
arrayOfKatas.push(sumof20)



//kata 16
let sum =0;
for(let i = 0; i< sampleArray.length; i++)
{
    sum += sampleArray[i]
}
arrayOfKatas.push(sum)



//kata 17
tempCurrentSmallest = sampleArray[0]
for(let i = 0; i< sampleArray.length; i++)
{
    if(sampleArray[i] < tempCurrentSmallest)
    tempCurrentSmallest =sampleArray[i]
}
arrayOfKatas.push(tempCurrentSmallest)



//kata 18
tempCurrentlargest = sampleArray[0]
for(let i =0; i< sampleArray.length; i++)
{
    if(sampleArray[i] > tempCurrentlargest)
    tempCurrentlargest =sampleArray[i]
}
arrayOfKatas.push(tempCurrentlargest)



addEventListener("click", function(){
     for(let i = 0; i < arrayOfKatas.length; i++)
     {
        parentElement.append('\n')
        parentElement.append("Kata" + (i +1) + '\n')
        parentElement.append(arrayOfKatas[i])
    }
})