let myName = 'Abhinav     '

String.prototype.trueLength = function(){
    console.log(`true length = ${this.trim().length}`)
}

myName.trueLength()