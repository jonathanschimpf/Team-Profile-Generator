
// Employee class defined. This will have properties shared amongst all team members.


function Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = function() {
        return this.name
    };

    this.getId = function() {
        return this.id
    };

    this.getEmail = function () {
        return this.email
    };

    this.getRole = function () {
        return "Employee"
    };

    
};

module.exports = Employee;