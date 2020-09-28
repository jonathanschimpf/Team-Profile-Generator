
// Manager class defined. Inherits name, id, email from Employee.


const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;

        this.getOfficeNumber = function () {
            return this.officeNumber
        };

        this.getRole = function () {
            return "Manager"
        };

    }

};


module.exports = Manager;


























// constructor version, classes have since been implemented.
// this is un-needed going forward, commented out for archival purposes.


// function Manager (name, id, email, officeNumber) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.officeNumber = officeNumber;

//     this.getName = function() {
//         return this.name
//     };

//     this.getId = function() {
//         return this.id
//     };

//     this.getEmail = function() {
//         return this.email
//     };

//     this.getOfficeNumber = function() {
//         return this.officeNumber
//     };

//     this.getRole = function() {
//         return "Manager"
//     };

// };