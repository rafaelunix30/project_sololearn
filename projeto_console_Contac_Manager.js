function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print; //atribui metodo print() no construtor
}

function print() {
    return console.log(this.name + ":", this.number) //método print 
}

var a = new contact("David", 12345); //construtor de contact
var b = new contact("Amt", 987654321);
a.print()
b.print()