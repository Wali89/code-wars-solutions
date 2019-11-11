function dataReverse(data) {
  var eightBits = data.length, 
  ans =[],
  i=0;
  
  while(eightBits>0) {
  ans.push(data.slice(eightBits-8,eightBits))
   eightBits -= 8
  }
  var finalAns =  [].concat(...ans);
  return finalAns;
}
