function pyramid(n) {

  if(n==0) {
    return [];
  }
  var ans = [];
  for(var i=1; i< n+1;i++) {
  
    var subAns = [];
    
    for(var j=0; j< i; j++) {
    
    subAns.push(1)
    
    }
    ans.push(subAns)
    
  }
  return ans;
}
