// Find the number of digits
// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.

const Find_Digits = (N) => 
{
 let count = 0 ;
  while(N !== 0){
    count = count + 1;
    N = parseInt(N / 10);
      }
      return(count);	 
};

// Find the Fives.
// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (N) => 
{
	 let count = 0;
    while (N > 0) {
        num = N % 10;
        N = parseInt(N / 10);
        if (num == 5) {
            count++;
        }
    }
    console.log(count);
};
Find_Five(345654);


// Find Sum
// You are given an integer 
// N
// , and your task is to find the sum of all the even integers starting from 
// 1
//  upto 
// N
//  (
// N
//  inclusive).

const findSum = (n) => {
  let sum = 0;
  for (let i = 2; i<=n;i+=2){
    sum = sum+i;
  }
  return (sum);
};

console.log(findSum(6));


// Find the sum of the digits of a given number.
// Write a program that takes a number from the user and get the sum of the digits present in the number.


const Number_Sum = (N) => 
{
	let sum = 0;
	while (N > 0)
	{
	  sum += N % 10;
	  
	  N = parseInt(N / 10);
	}
	console.log(sum);
};
Number_Sum(1234);

// Print the Odds.
// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => {
  console.log(2);
  var a = 3;
  while(a <=N)
{
      console.log(a);
      a += 2;
  }
};

Print_Odd(10);


// Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .

// Note: You have to complete Print_pattern. No need to take any input.

const Print_pattern = (N) => 
{
for(var a = 0; a <= N; a++) {
        let pattern = '';
        for (var b = 0; b < a; b++) {
            pattern = pattern + "*";
        }
        console.log(pattern); 
    }
};
Print_pattern(5)





// Check whether a Number is a prime or not.
// Write a program which takes  a number from user and check whether number is prime number or not a prime number.

// Note: You have to complete Prime_Check. No need to take any input.


const Prime_Check = (N) => 
{
	let count = 0;
	for(let i = 1;i<=N;i++)
	{
	  if (N % i === 0)
	  {
	    count ++;
	  }
	}
	
	if(count == 2)
	{
	 console.log("yes");
	}
	else
	{
        console.log("no");
	}
};
Prime_Check(7);





// Print Numbers
// You are given an integer , and your task is to print all the integers starting from 1 till N (N inclusive).

// Note: You have to complete printNumbers function. No need to take any input.

const printNumbers = (n) => {
    for(var a = 1; a <= n; a++){
        console.log(a);
    }
};

printNumbers(4);




// Print the Table
// Write a program which takes a number from user and print the table.

// Note: You have to complete Print_Table. No need to take any input.

const Print_Table = (N) => 
{
	for(let i=1; i<= 10; i++)
	{
	 
    console.log( `${N} * ${i} = ${N*i}`);
	}

};
Print_Table(3);


