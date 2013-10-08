if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}


var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

var personList = [person1, person3];

var sayHello = function() {
 alert('Hello, ' + this.firstName);
};

var greetOneAnother = function(a, b) {
 alert("{0}, meet {1} and {2}".supplant([this.firstName, a.firstName, b.firstName]));
};


sayHello()

sayHello.call(person1)

greetOneAnother.apply(person2,[person1, person3])

function whoAmI(){
    alert($(this).text())  
}
$(document).ready(function (){
    $('.button').on('click',whoAmI)
    whoAmI()

    whoAmI.call($('.button:first-child'))
})

