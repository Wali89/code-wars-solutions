function createPhoneNumber(numbers){
  numbers.unshift("(")
  numbers.splice(4,0,')')
  numbers.splice(5,0,' ')
  numbers.splice(9,0,'-')
  return numbers.join('')
}
