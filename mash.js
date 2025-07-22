// Step 2:
function mash() {
  return "You will live in a " + getHome() + ", travel to " + getTravelCount() + " countries" + ", and have a pet " + getPet() + ", attend " + getCollege() + ", and work as a " + futureJob() + ".";
}

// Step 3:
function randNumGenerator(max) {
  return Math.floor(Math.random() * max);
}

// Step 4:
function getHome() {
  let userHome = process.argv[2];
  let homes;

  if (userHome) {
    homes = ["Mansion", "Castle", "Shack", "House", userHome]; 
  } else {
    homes = ["Mansion", "Castle", "Shack", "House"];
  }

  let index = randNumGenerator(homes.length);
  return homes[index];
}

// Step 5:
function getTravelCount() {
  return randNumGenerator(101); 
}

let result = mash();
console.log(result);

// Step 6:
function getPet() {
  let userPet = process.argv[3];
  let randomPets = ["dragon", "hamster", "robot dog", "unicorn", "talking cat", "invisible lizard", "AI raccoon"];

  let coinFlip = randNumGenerator(2);

  if (coinFlip === 0 || !userPet) {
    let index = randNumGenerator(randomPets.length);
    return randomPets[index];
  } else {
    return userPet;
  }
}

// Step 10 [CUSTOM]
function getCollege() {
  let colleges = ["Harvard", "MIT", "UT Austin", "Stanford", "All Star Code University", "Ram College"];
  let index = randNumGenerator(colleges.length);
  return colleges[index];
}

function futureJob() {
  let jobs = ["Software Engineer", "Aerospace Engineer", "All Star Code Teacher", "Google CEO", "Music Producer", "Full-Time Meme Creator"];
  let index = randNumGenerator(jobs.length);
  return jobs[index];
}