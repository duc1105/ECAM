const person = {
    name: "Duc",
    age: 20
};
console.log(person);

const person2 = {
    ...person,
    address: "VinhPhuc"
};
console.log(person2);

const products = [1, 2, 3, 4];
// products.push(5); (Không nên dùng)
const newproducts = [-1, ...products, 6];
console.log(newproducts);

