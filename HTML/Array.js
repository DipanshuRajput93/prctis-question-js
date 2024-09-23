//Write a java script program to calculte sum of arry element?
// let x=[6,9,5,3,7,9,15];
// let sum=0;
// for(let i=0; i<x.length; i++){
//     sum=sum+x[i]
// }
// console.log(sum)
//#########################################################################################

//Write a java script program to calculate even element or odd element ?
// let x=[5,2,8,9,7,19,30];
// let sum1=0, sum2=0;
// for(let i=0; i<x.length; i++){
//     if(x[i]%2==0){
//         sum1=sum1+x[i]
//     }
//     else{
//         sum2=sum2+x[i]
//     }
// }console.log(sum1,sum2)
//############################################################################################

//Write a java script program to revers the element?
// let x=[9,8,7,6,5,4,3,2,1];
// for(let i=x.length-1; i>=0;i--){
//     console.log(x[i])
// }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Write a java script program to find max element in Array?
// let x=[5,8,6,99,4,98];
// let max=0;
// for(let i=0; i<x.length; i++){
//     if(x[i]>max){
//         max=x[i]
//     }
// }
// console.log(max)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Write a java script program to find second element in array?
// let x=[8,9,6,7,5];
// let m=0; s=0;
// for(let i=0; i<x.length; i++){
//     if(m<x[i]){
//         s=m
//         m=x[i]
//     }
//     else if(s<x[i]){
//         s<x[i]
//     }
// }
// console.log(m)
//###################################################################################
//Write a java script program to display prime element in array?
// let x=[8,6,7,3,1];
// for(let j=0; j<x.length; j++){
//     let num=x[j]
//     let c=0
//     for(let i=1; i<=numi; i++){
//         if(num%i==0){
//             c++
//         }
//         if(c==2) 
//             console.log(num)
//     }
// }
//Write a java script program to sort the element in asending order?
//Write a java script program to Merge two Array in one array

let data=[1,2,3];
let data2=[4,5,6];
let data3=[];

for(let i=0; i<data.length; i++){
    data3[i] = data[i];
}
for( let i=0; i<data2.length; i++){
    data3[data.length+i]= data2[i]
}
console.log(data3)
                                                                                                