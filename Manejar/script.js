
const fs = require(`fs`);
var count = 0;
var c = 0;


while (count < 5) {

    fs.writeFile(`./Manejar/files/${count}.txt`, `this is my text number ${count}`, function (err) {
        if (err) throw err;
        console.log("update");
    })
    count++;
}

while (c < 5) {

    fs.readFile(`./Manejar/files/${c}.txt`, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    });

    c++;
}

