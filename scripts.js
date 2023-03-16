// Part1
const customerName = ['Sofia', 'David','Juan']
// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?
customerName.push('Sara','Augustin')
customerName.shift()
console.log(customerName)
// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. 
// What does the queue look like?
customerName.splice(1,0,'Renata')
customerName.push('Elena')
console.log(customerName)



// ### Exercise #2
let n = 5;
let string = "";
//external loop will take care of columns of pattern
//the internal loop will print rows of the pattern.
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


//Exercise 3
const decreasing = (num) => {
    if(num>0){
        while(num>=0){
            console.log(num);
            num -= 0.5;
        }
    }
}
decreasing(3)                                 

console.log('\n');


// - Write a method with a while loop to print 1 through n in square brackets. 
const printOddNum = (numStart, numEnd) => {
    let count = numStart;
    let result = [];
    while(count<=numEnd){
        if(count%2 === 1){
            result.push(count)
        }
        count ++
    }
    console.log(result.join());
}
printOddNum(1,100) 


console.log('\n');


// - Write a method with a while loop to print 1 through n in square brackets.
const printNum = (num) => {
    let result = '';
    let count = 1;
    while(count<=num){
        result += '[';
        result += count;
        result += '] ';
        count ++;
    }
    console.log('Result as text ' + result);
}

 
//  Write a method with a while loop that computes the sum of first n positive integers:
let sum = 0;
 const n2 = 19;
 let j = 0;
 while (j <= n2) {
    sum = sum + j ;
    j++;
 } 

 console.log(sum);