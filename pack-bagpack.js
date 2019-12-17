function packBagpack(scores, weights, capacity) {
  let n = scores.length;
  let a = new Array(n + 1);
  for(let i=0; i<a.length; i++) {
    a[i] = new Array(capacity+1).fill(0);
  }  
  
  for(let i=1; i<=n; i++) {
    let score = scores[i-1];
    let weight = weights[i-1];  
    for(let w=0; w <= capacity; w++) {          
      if(weight > w) {
        a[i][w] = a[i-1][w];
      } else {
        a[i][w] = Math.max(
          a[i-1][w],
          a[i-1][w-weight] + score
        );
      }
    }
  } 
  
  return a[n][capacity];
}
