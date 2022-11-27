let name1 = {
  firstname: "Renu",
  lastname: "Bhati",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + "," + state
  );
};
printFullName.call(name1, "Dehradun", "Uttarakhand");
let name2 = {
  firstname: "Rahul",
  lastname: "Dewatwal",
};
//function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);
//bind method
let printName = printFullName.bind(name1, "Mumbai", "Maharashtra");
console.log(printName);
printName();
