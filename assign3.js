let variable1=Number(process.argv[2])
let variable2=Number(process.argv[3])
let sum=variable1+variable2
let msg
if(sum>10 && sum<100)

{
   msg=(`${sum} is greater than 10 but less than 100`) 
}
else if(sum>100 && sum<1000)
{
    msg=(`${sum} is greater than 100 but less than 1000`)
}
console.log(msg)