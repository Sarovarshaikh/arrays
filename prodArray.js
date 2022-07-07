//Qusetion 1
// Write a program that takes an array as input from the user and find out the product of the elements.
// Note: You have to complete Find_Prod. No need to take any input.
const Find_Prod = (array, N) => 
{
// let array = [1,2,3,4,5]
 let prod = 1;
  for (let i = 0;i<N;i++)
  {
    prod = prod * array[i];
  }
  return prod;
     

};
function myFun(arry,N){
    let pro = 1;
    for(i=1;i<=N;i++){
        pro = pro *arry[i] ;
        console.log(pro);
    }
};
myFun([1,2,3,4,5],5);