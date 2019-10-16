function oddOrEven(ar) {
  return ar.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';

}
