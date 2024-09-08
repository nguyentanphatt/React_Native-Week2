/*4. Print all the multiplication tables with numbers from 1 to 10  */
for (let i = 1; i < 11; i++) {
    let row = ''
    for (let j = 1; j < 11; j++) {
        row += (i * j) + ' ';
    }
    console.log(row);
}