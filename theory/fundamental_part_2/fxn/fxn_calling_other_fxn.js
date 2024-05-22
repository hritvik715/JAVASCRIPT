function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePiece = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePiece} apples and ${orangePieces} oranges .`;

    return juice;
}

console.log(fruitProcessor(2, 3));




const x = (y) => y * 2;
console.log(x(5));