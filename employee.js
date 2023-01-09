const fs = require('fs');

    const   employee = function(oldNOte) {
    let emploNote = JSON.parse(oldNote);

    let mNote = emploNote.map(function (n) {
        return n.employee;
    });

    console.log("Employee: " + mNote);
}

module.exports = employee;