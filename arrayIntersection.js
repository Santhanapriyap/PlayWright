function intersection(arr1, arr2)
{
    console.log(`arr1: ${arr1}`);
    console.log(`arr2: ${arr2}`);
    for(let i=0; i<arr2.length;i++)
        {
            let result=0;
            for(let j=0; j<arr1.length; j++)
                {
                    if(arr2[i]==arr1[j])
                        {
                            result=1;
                            console.log(`Removed duplicate ${arr2[i]}`);
                            break;
                        }
                }
                if(result==0)
                {
                        arr1.push(arr2[i]);
                }
            }
    console.log("Joined both array without duplicate:");
    console.log(arr1);
}

let arr1=[1,2,3,4,5];
let arr2=[5,7,8,9,10];

intersection(arr1, arr2);
