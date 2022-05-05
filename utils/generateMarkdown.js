//license badge function
function renderLicenseBadge(data) {
  const licenseBadge = data.license;
  switch(licenseBadge) {
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)` 
      break;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'none':
      return ``
      break;    
  };
}

function renderLicenseLink(data) {
  const licenseType = (data.license);
  if(licenseType == 'Apache') {
    var licenseLink = `[Apache](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#apache-license-20)`
  } else if(licenseType == 'BSD') {
    var licenseLink = `[BSD](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#the-bsd-license-case)`
  } else if(licenseType == 'MIT') {
    var licenseLink = `
    MIT License

        Copyright (c) [year] [fullname]
          
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
          
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
          
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
  } else if(licenseType == 'none') {
    var licenseLink = `"None"`
  };
  return licenseLink;
};

function renderLicenseSection(data) {
  if(data.license) {
    return `## License`;
  } else {
    return ``;
  };
}

module.exports = generateMarkdown 