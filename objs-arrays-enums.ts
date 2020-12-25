// const person: {
//   age: number;
//   name: string;
//   hobbies: string[];
//   role: [number, string];
// } = {
// const person = {
//   age: 31,
//   name: 'Roman',
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// let favoriteActivities: string[];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase());
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  PLAYER = 'PLAYER',
  ADMIN = 5,
  READ_ONLY = 9,
  AUTHOR,
}

const person = {
  name: 'Roman',
  age: 31,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.PLAYER) {
  console.log('is author');
} else {
  console.log('Not admin here');
}
