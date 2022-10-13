let array=[1,1,1,2,2,5,5,5,5,5,5,3,4,5,5,2,2,2,2,2,2,2,2,5];
let newarray= [...new Set(array)];
document.write(newarray);