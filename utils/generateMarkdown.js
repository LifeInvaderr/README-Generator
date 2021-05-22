// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `![License](https://img.shields.io/static/v1?label=License&message=${license.replace(" ", "%20")}&color=red)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return "";
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License`
    + 
    `\nThe license used for this project is ${license}.\n`;

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ${renderLicenseLink(data.license)}
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}
  
  ## Features
  ${data.features}


  ## Contributing
  ${data.contributing}


  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please reach me at ${data.questions}. 
`;
}

module.exports = generateMarkdown;



// ![License](https://img.shields.io/badge/license-boost-blue.svg)


// * [License](#license)
