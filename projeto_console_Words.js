class Add {
    constructor(...words) {
        this.words = words;

    }
    print() {

        var total = [];
        for (var palavras in this.words) {
            total[palavras] = "$" + this.words[palavras]; //CONCATENA CADA PALVRAS COM $

        }
        return console.log(total.join("") + "$") //método print 
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu"); //construtor de Add
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print()
y.print()
z.print()