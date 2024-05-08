const User = {
  name: "Vikash",
  email: "Vikash123@gamil.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Vikash", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "12345",
  name: "Vikash",
  email: "Vikash123@gmail.com",
  isActive: true,
};

export {};
