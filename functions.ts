function addTwo(num: number): number {
  return num + 2;
  // return "Hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let logInUser = (name: string, email: string, isPaid: boolean = false) => {};

getUpper("vikash");
addTwo(3);
signUpUser("Vikash", "vikash123@gmail.com", false);

logInUser("viaksh", "@2q3gamil.om");

// function getValue(myVal: number){
//   if(myVal > 5){
//     return true;
//   }

//   return "200 ok";
// }

const getHello = (str: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}
