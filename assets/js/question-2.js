function reversingNumber(x){
	x = x + "";
	return x.split("").reverse().join("");
}
document.write((reversingNumber(124567890)));