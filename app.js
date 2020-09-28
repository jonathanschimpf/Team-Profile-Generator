// application greeting before questioning..

console.log("Hello! This is command line application will help you generate profiles for your team. Let's get started.")


const employees = [];


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");





// Manager's inquirer prompts.


function managerCreation() {

    inquirer.prompt([

        {
            type: "input",
            message: "What is the name of your team's Manager?",
            name: "name",
            default: "Manager's Name"

        },

        {

            type: "input",
            message: "What is your Manager's ID number?",
            name: "id",
            default: "Manager's ID Number"

        },

        {

            type: "input",
            message: "What is your Manager's e-mail address?",
            name: "email",
            default: "manager@email.com"

        },

        {

            type: "input",
            message: "What is your Manager's office number?",
            name: "officeNumber",
            default: "Manager's Office Number"

        }

    ])

        .then((managerResponses) => {

            let manager = new Manager(managerResponses.name, managerResponses.id, managerResponses.email, managerResponses.officeNumber);

            employees.push(manager);

            employeeCreation();

        })

}




// Intern's inquirer prompts.


function internCreation() {

    inquirer.prompt([

        {
            type: "input",
            message: "What is the name of this Intern?",
            name: "name",
            default: "Intern's Name"

        },

        {

            type: "input",
            message: "What is your Intern's ID number?",
            name: "id",
            default: "Manager's ID Number"

        },

        {

            type: "input",
            message: "What is your Intern's e-mail address?",
            name: "email",
            default: "intern@email.com"

        },

        {

            type: "input",
            message: "What School has your Intern been attending?",
            name: "school",
            default: "Intern's School"

        }

    ])

        .then((internResponses) => {

            let intern = new Intern(internResponses.name, internResponses.id, internResponses.email, internResponses.school);

            employees.push(intern);

            employeeCreation();

        })

}



// Engineer's inquirer prompts.


function engineerCreation() {

    inquirer.prompt([

        {
            type: "input",
            message: "What is the name of this Engineer?",
            name: "name",
            default: "Engineer's Name"

        },

        {

            type: "input",
            message: "What is your Engineer's ID number?",
            name: "id",
            default: "Manager's ID Number"

        },

        {

            type: "input",
            message: "What is your Engineer's e-mail address?",
            name: "email",
            default: "engineer@email.com"

        },

        {

            type: "input",
            message: "What is your Engineer's GitHub username?",
            name: "github",
            default: "Engineer's GitHub username"

        }

    ])

        .then((engineerResponses) => {

            let engineer = new Engineer(engineerResponses.name, engineerResponses.id, engineerResponses.email, engineerResponses.github);

            employees.push(engineer);

            employeeCreation();

        })

}



// application order and list selection for new team member creation

managerCreation()

function employeeCreation() {

    inquirer.prompt([


        {

            type: "list",
            message: "Please select an employee type to create a new profile.",
            name: "employeeSelection",
            choices:

                [
                    "Engineer",
                    "Intern",
                    "I'm done adding employees."
                ]


        }

    ])

        .then((selectionType) => {

             if (selectionType.employeeSelection === "Engineer") {

                engineerCreation()


            } if (selectionType.employeeSelection === "Intern") {

                internCreation()


            } else {

                const html = render(employees);

                fs.writeFile(outputPath, html, err => {

                    if (err) {

                        return console.log(err);

                    };

                });
            }

        });
  
  }

  console.log("You've successfully generated your team profile. Enjoy!")















// assignment go-by reference commenting


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
