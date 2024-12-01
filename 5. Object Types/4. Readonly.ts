type Person1 = {
  name1: string;
  age: number;
  readonly email: string;
};

const user1: Person1 = {
  name1: "John",
  age: 20,
  email: "test@gmail.com",
};

console.log(user1.email); // Valid
// user.email = "john@gmail.com" // 🚫 Not Valid
