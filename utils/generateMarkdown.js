const generateReadme = 

var templateFn = expression => `string text ${expression} more text`;
templateFn("test")

var temp2 = (e1, e2, e3) => `test ${e1} and ${e2} and ${e3} blah`;

temp2(1,2,3)
'test 1 and 2 and 3 blah'

generateMarkdown => (options) {
  getTitleMarkdown(options.title) + getLicenseMarkdown(options.license) ....
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown 