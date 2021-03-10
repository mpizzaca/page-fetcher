const { writeFile } = require('fs');
const request = require('request');
const domain = 'http://example.edu'

const pathifyDomain = domain => {
  return './' + domain.substr(7).replace('.', '-') + '.txt';
};

request(domain, (err, response, body) => {
  if (err) {
    console.log('Error in HTTP request - not saving file');
    console.log(err);
  } else {
    writeFile(pathifyDomain(domain), body, err => {
      if (err) console.log(err)
      else console.log('File written successfully: ' + pathifyDomain(domain));
    });
  }
});
