const add = require('./add')
const read =require('./read')

const cmd = process.argv

var note = {}

if(cmd[2]){
    note = {
        employee: cmd[2],
        role: cmd[3],
        department: cmd[4]
    }

    var oldnote = read()
    add(note, oldnote)
}

if (cmd[2] == 'read'){
    present(read())
}