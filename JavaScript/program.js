const fs = require('fs');
const xml2js = require('xml2js');
const yaml = require('js-yaml');


const textData = fs.readFileSync('Greeting.txt', 'utf8');
console.log(textData);


const jsonData = JSON.parse(fs.readFileSync('Greeting.json', 'utf8'));
console.log(jsonData);


const csvData = fs.readFileSync('Greeting.csv', 'utf8');
console.log(csvData);


const xmlData = fs.readFileSync('Greeting.xml', 'utf8');
xml2js.parseString(xmlData, (err, result) => {
    if (err) throw err;
    console.log(result);
});


const yamlData = yaml.load(fs.readFileSync('Greeting.yaml', 'utf8'));
console.log(yamlData);
