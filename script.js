function firstNonRepeatedChar(str) {
 // Write your code here
    let a =str.split("");
	a.sort();
	let b=a.join("");
	let i=1;
	let s="";
	while(i<b.length-1){
		if(b.charAt(i-1)!=b.charAt(i) && b.charAt(i+1)!=b.charAt(i)){
			s=b.charAt(i);
			break;
		} 
		i++;
	}
	return s;
	 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
