// object = {key : value}
const person = {
    name: "Duc",
    age: 18,
    address: {
        city: "HCM"
    }
};
const { name,
    age,
    address: { city } }
    = person;
//  console.log(person.name)
console.log(city)
const showInfo = ({ name, age }) => {
    console.log(name, age);
};
showInfo(person);