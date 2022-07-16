const person = {
  firstName: "Rahul",
  lastName: "Choudhary",
  age: 29,
  getIntroduction: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
  },
};

person.getIntroduction();

// call function
getIntroduction.call(person, "Mumbai", "Maharastra");

function getIntroduction(location, state) {
  console.log(
    `${this.firstName} ${this.lastName} is ${this.age} years old, stayed at ${location} ${state}`
  );
}

getIntroduction.call(person, ["Mumbai", "Maharastra"]);

const person2 = {
  firstName: "Nirbhay",
  lastName: "Choudhary",
  age: 27,
};

// apply function
getIntroduction.call(person2, "Hyderbad", "AP");
getIntroduction.call(person, ["Mumbai", "Maharastra"]);

// bind function
let newFun = getIntroduction.bind(person, "Mumbai", "Maharastra");
newFun();
