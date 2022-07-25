function factorial(n) {

  let factorial = 1;

  for (i = n; i > 0; i -= 1) {
    factorial *= i;
  }

  return factorial;
}
