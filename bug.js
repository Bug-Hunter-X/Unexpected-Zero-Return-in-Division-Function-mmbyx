function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This will cause unexpected behavior if a and b are both 0
  }
  return a / b; //The bug is here: it doesn't handle division by zero
}