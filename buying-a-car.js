function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var oldCar = startPriceOld;
  var newCar = startPriceNew;
  var savings = 0;
  var months = 0;
  var percentageLoss = percentLossByMonth;
  
  while((oldCar + savings) < newCar){
  
    savings = savings + savingperMonth;
    oldCar =(oldCar * (percentageLoss/100)));
    newCar = (newCar - (newCar * (percentageLoss/100)));
    months+=1;
      if(  months % 2 ==1) {
      percentageLoss+=.5
    }
    
  }
  
  var cash = (oldCar + savings) - newCar;
  
  return [months, Math.round(cash)];
}
