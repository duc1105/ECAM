// const products = ["Duc", "Duy", "Phuong"];
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }

// // for in
// for (let item in products) {
//     console.log(products[item])
// }
6666// for of
// for (let item of products) {
//     console.log(item)
// }
// // foreach
// products.forEach((item, index) => console.log(`${item} ${index}`))
// //  map
// const newMapProduct = products.map((item, index) => {
//     return `${item} ${index + 1}`
// })
// console.log(newMapProduct);

// // filter
// const newFilterProduct = products.filter((item, index) => {
//     return item != "Duy";
// })
// console.log(newFilterProduct)

// // reduce

// const product = [
//     { id: 1, name: "Duc", price: 200 },
//     { id: 2, name: "Duy", price: 300 },
//     { id: 3, name: "Phuong", price: 400 },
// ]

// const total = product.reduce((accumulator, nextValue) => accumulator + nextValue);
const product = {
    name: "Duc",
    age: 20,
    address: "Vinh Phuc"
};
const interestedIn = prompt('What do you want to know  about product ? Choose between name , age and address');
console.log(product);
