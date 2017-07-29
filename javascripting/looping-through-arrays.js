var pets = ['cat', 'dog', 'rat'];

pets = pets.map((e, i) => {
    return pets[i] + 's';
});

console.log(pets);
