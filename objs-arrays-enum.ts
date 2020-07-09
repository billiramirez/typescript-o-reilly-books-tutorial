enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person =
  // : {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // }
  {
    name: "Billi",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };

let favoriteActivities: string[];
favoriteActivities = ["Sport"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
