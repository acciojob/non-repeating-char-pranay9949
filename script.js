function firstNonRepeatedChar(str) {
 // Write your code here
    let a =str.split("");
	a.sort();
	let b=a.join("");
	let i=1;
	let s=null;
	if(b.charAt(0)!=b.charAt(0+1)){
        s=b.charAt(0);
		return s
	}
	
	while(i<b.length-1){
		
		if(b.charAt(i-1)!=b.charAt(i) && b.charAt(i+1)!=b.charAt(i)){
			s=b.charAt(i);
			return s;
			break;
		} 
		
		i++;
	
	}
	if(b.charAt(b.lenght-1)!=b.charAt(b.length-2)){
        s=b.charAt(b.length-1);
		return s
	}
	return s;
	 
}
const input = propt("Enter a string");
alert(firstNonRepeatedChar(input)); 
