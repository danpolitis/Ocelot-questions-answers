const fs = require('fs');
const parse = require('csv-parse');
const path = require('path')

console.log(__dirname)
const filepath = '../../../SDCdata'
const CSV_DIR = path.resolve(__dirname, '..', '..', '..', 'SDCdata')


const header = 'id,product_id,body,date_written,asker_name,asker_email,reported,helpful'
const writeFile = fs.createWriteStream(path.resolve(CSV_DIR, 'cleanedAnswers.csv'))
writeFile.write(header)

const errorRows = [];
const startTime = new Date();
console.log('Parsing answers.csv...');

fs.createReadStream(path.resolve(CSV_DIR, 'answers.csv'))
  .pipe(
    parse({
      delimitter: ',',
      from_line: 2,
    })
  )
  .on ('data', (row) => {
    if (row.length !== 8) {
      errorRows.push(row);
    } else {
      writeFile.write(`\n${row[0]},${row[1]},${row[2]},${row[3]},${row[4]},${row[5]},${row[6]},${row[7]},`)
    }
  })
  .on ('end', () => {
    const endTime = new Date();
    console.log(`${endTime - startTime}ms to complete operation`);
    console.log('These rows have length problems');
    console.log(errorRows);
  })