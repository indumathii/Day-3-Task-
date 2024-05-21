let obj1={"name":"indumathi","age":5,"city":"Chennai"}
let obj2={"age":5,"name":"indumathi"}

let i=0;
let keys1=Object.keys(obj1);
let keys2=Object.keys(obj2);
for (let key1 of keys1)
    for ( let key2 of keys2)
        if(keys1.length==keys2.length)
            {
                if(key1==key2)
                i=i+1;
            
            }
        else
         console.log("Both Objects are not Same");
if(i==keys1.length)
    console.log("Both Objects are Same");
else
console.log("Both Objects are not Same");