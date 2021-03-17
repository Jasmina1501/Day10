var myPet = {
    species: "Cat",
    name: "Mica",
    legs: 4,
    friends: "Jasa, Sofa"
}
function myFunction(myObj) {
    return myObj;
} 
console.log(myFunction(myPet));
module.exports={ myPet, myFunction };