function stringChop(str, size) {
  // your code here
	let result=[]
    for(let i=0;i<str.length;){
        let s=""
        let count=0;
        let j=0;
        for( j=i;j<str.length;j++){
            count++;
            if(count>size)break;
            s+=str[j]
            
        }
        i=j
        result.push(s)
    }
    return result
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
