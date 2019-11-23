function sumTwoSmallestNumbers(numbers) {  
  var sorted = numbers.sort(function(a, b){return a-b});
  
 var ans = sorted[0] + sorted[1];
 
 return ans
 
  
}
