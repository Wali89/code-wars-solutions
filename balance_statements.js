function balanceStatements(list){
  var bought = 0, sold = 0, bad = [];
  list = list.trim();
  list = list !== '' ? list.split(',') : [];
  for (var i in list) {
    if (!/^\s*[^\s]+ \d+ \d*\.\d+ (B|S)\s*$/.test(list[i])) 
      bad.push(list[i].trim());
    else { 
      var order = list[i].trim().split(' ');
      if (order[3] === 'B') bought += order[1]*order[2];
      if (order[3] === 'S') sold += order[1]*order[2];
    }
  }
  return 'Buy: ' + Math.round(bought) +
         ' Sell: ' + Math.round(sold) +
         (bad.length === 0 ? '' :
         '; Badly formed ' + bad.length + ': ' + bad.join(' ;') + ' ;');
}
