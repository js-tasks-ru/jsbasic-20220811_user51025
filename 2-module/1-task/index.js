function sumSalary(salaries) {
  let sumSalaries = 0;

  for (let prop in salaries) {
    (typeof salaries[prop] === 'number' && isFinite(salaries[prop])) ? sumSalaries += salaries[prop] : 'not a salary - skip';
  }
  return sumSalaries;
}
