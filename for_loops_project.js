//Part 1a:
for (let i = 100; i >= 0; i--) {
  console.log(i);
}
//Part 1b:
let start = Number(process.argv[2])

for (let i = start; i >= 0; i--) {
  console.log(i);
}
//Part 2:
let students = ["Ram", "Saisanthosh", "Gautham", "Geetham", "Emmanuel", "Leo"];

for (let i = 0; i < students.length; i++) {
  console.log("ASC Tech Visionaries - " + students[i]);
}