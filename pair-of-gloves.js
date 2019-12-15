function numberOfPairs(gloves)
{
  gloves = gloves.sort();
  let count = 0;
  for (var i = 0; i < gloves.length; i++) {
    if (gloves[i] === gloves[i + 1]) {
      count++
      i++
    }
  }
  return count;
}
