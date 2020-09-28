
// Engineer class defined. Inherits name, id, email from Employee.


const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;

        this.getGithub = function () {
            return this.github
        };

        this.getRole = function () {
            return "Engineer"
        };

    }

};


module.exports = Engineer;


























// constructor version, classes have since been implemented.
// this is un-needed going forward, commented out for archival purposes.

// function Engineer (name, id, email, github) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.github = github;

//     this.getName = function() {
//         return this.name
//     };

//     this.getId = function() {
//         return this.id
//     };

//     this.getEmail = function() {
//         return this.email
//     };

//     this.getGithub = function() {
//         return this.github
//     };

//     this.getRole = function() {
//         return "Engineer"
//     };


// };
