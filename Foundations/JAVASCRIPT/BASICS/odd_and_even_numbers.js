/* Program to check for odd and even numbers in a given array */

let numbers = [1,2,3,4,5,6,7,8,9,10,20,50];

let size = numbers.length;

for(let i = 0; i < size; i++)
{
	if(numbers[i] % 2 === 0)
	{
		console.log('This is an even number: ' + numbers[i]);
	} else{
		console.log('This is an odd number: ' + numbers[i]);
	}
}
