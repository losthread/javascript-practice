// Prototype chains
// every object has a prototype
// that prototype in turn has a prototype
// to the root of the object whose prototype is null

// Object.getPrototypeOf() method returns the prototype of an object
// by default the prototype is Object.prototype

const pureTitan = {
  name: "Eren's mom",
};

const beastTitan = Object.create(pureTitan);
beastTitan.name = "Zeke";

console.log(beastTitan);
console.log(Object.getPrototypeOf(beastTitan));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(beastTitan)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(beastTitan))));
console.log("\n");

const user = {
  name: "Default User",
  type: "user"
};

const adminUser = Object.create(user);
adminUser.type = "admin";

const admin1 = Object.create(adminUser);
console.log(Object.getPrototypeOf(admin1).type);

function isAdmin(obj) {
  return Object.getPrototypeOf(obj).type === "admin";
}