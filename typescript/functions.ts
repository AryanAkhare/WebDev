// Type alias
type Email = string;

// Interface
interface User {
  name: string;
  email: Email;
  isPaid: boolean;
  age?: number; // optional
}

// Enum
enum Role {
  USER = "user",
  ADMIN = "admin",
}

// Function with typed object + default param
function signUp(
  user: User,
  role: Role = Role.USER
): string {
  return `${user.name} | ${user.email} | ${role}`;
}

// Usage
const newUser: User = {
  name: "Aryan",
  email: "aryan@gmail.com",
  isPaid: false,
};

console.log(signUp(newUser));
