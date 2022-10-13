function array1(arr) {
      let total = 0;
    for ( i = 0; i < arr.length; i++) {
      for ( j = 0; j < arr[i].length; j++) {
        total += arr[i][j];
        }
    }
return total;
  }

  let answer=array1([[3, 2], [1], [4, 12]]);
  console.log(answer);