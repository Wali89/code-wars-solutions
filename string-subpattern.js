function hasSubpattern(string) {
  return (string + string).indexOf(string, 1) != string.length;
}
