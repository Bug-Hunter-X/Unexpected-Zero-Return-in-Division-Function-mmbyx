function foo(a, b) {
  if (a === 0 && b === 0) {
    throw new Error('Cannot divide zero by zero'); // Handle zero/zero case explicitly
  } else if (b === 0) {
    throw new Error('Cannot divide by zero'); // Handle division by zero case
  } else if (a === 0 || b === 0) {
    return 0; //Handle cases where a or b is 0
  }
  return a / b; 
} 