/* === Operator in js ==== 

1.Arithmetic  +,-,*,/,%
2.Assignment  =,+=,-= 
3.Comparison ==,===,!==,>,<
4.Logical &&,`
5.Ternary ? : [Short form of if...else.]
6.Spread ...[merge arrays/object]
7.Rest ...


*/
//---Logical Operators---
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Dashboard");
} else {
  console.log("Access Denied");
}



//---Ternary Operator----
const isDarkMode = true;
const theme = isDarkMode ? "Dark Theme" : "light Theme";
console.log(theme);

//----spread Operator---
const cart = ["Phone", "Laptop"];
const updatedCart = [...cart, "Mouse"];
console.log(updatedCart);


/* ## project 
""" Create a Salary Calculator.

Requirements:

Ask for the employee's name.
Ask for the monthly salary.
Ask for the bonus.
Ask for the tax percentage.
Calculate:
Gross Salary = Salary + Bonus
Tax Amount
Net Salary
Print a salary slip. 

===== Salary Slip =====

*/

//---solve---
const name = String(prompt("Enter your name: "));
const monthlySalary = Number(prompt("Enter Your Monthly salary: "));
const bonus = Number(prompt("Enter Your Bonus: "));
const taxPercentage = parseFloat(prompt("tax percentage: "));

/*---Calculator---*/
const GrossSalary = monthlySalary + bonus;
const tax = (taxPercentage / 100) * monthlySalary;
const netSalary = tax - monthlySalary;

console.log("Name: ", name);
console.log("Gross Salary: ", GrossSalary);
console.log("Tax: ", tax);
