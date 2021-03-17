function myFunction(propValue) {
    var lion = {
        "name": 'Simba',
        "legs": 4,
        "tails": 1,
        "roar": "roar-roar"
    }
    delete lion[propValue];
    return lion;
}
console.log(myFunction("roar"));