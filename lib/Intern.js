
// Intern class defined. Inherits name, id, email from Employee.


const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;

        this.getSchool = function () {
            return this.school
        };

        this.getRole = function () {
            return "Intern"
        };

    }

};


module.exports = Intern;


























// constructor version, classes have since been implemented.
// this is un-needed going forward, commented out for archival purposes.

// function Intern (name, id, email, school) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;

//     this.getName = function() {
//         return this.name
//     };

//     this.getId = function() {
//         return this.id
//     };

//     this.getEmail = function() {
//         return this.email
//     };

//     this.getSchool = function() {
//         return this.school
//     };

//     this.getRole = function() {
//         return "Intern"
//     };

// };