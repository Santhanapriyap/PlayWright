function numberType(num)
{
if(num>0)
    {
    console.log(`${num} is possitive`);
    switch(num)
{
    case 1: console.log(`${num} is ONE`);
    break;
    case 2: console.log(`${num} is TWO`);
    break;
    case 3: console.log(`${num} is Three`);
    break;
    case 4: console.log(`${num} is Four`);
    break;
    case 5: console.log(`${num} is Five`);
    break;
    case 6: console.log(`${num} is Six`);
    break;
    case 7: console.log(`${num} is Seven`);
    break;
    case 8: console.log(`${num} is Eight`);
    break;
    case 9: console.log(`${num} is Nine`);
    break;
}}
else if(num==0)
    console.log(`Number ${num} is  is neutral`)
else
    console.log(`${num} is negative`);
}

numberType(-1);
