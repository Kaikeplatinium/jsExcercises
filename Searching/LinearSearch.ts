var beasts = ["Centaur", "Godzilla", "Mosura"]

console.log(beasts.indexOf("Godzilla"));

beasts.findIndex(function (item) {
    return item == "Godzilla"
})

// Checks each item until find the value, worst case us O(n)