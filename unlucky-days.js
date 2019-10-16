function unluckyDays(year){
  var ans = 0;
  
  for (var month=0; month <12; month++) {
    var d = new Date(year,month,13);
    if(d.getDay()==5){
      ans++
    }
  }
  return ans;
  
}
