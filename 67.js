
function Person(first, last, age, gender, interests) { 
    this.name = {first, last}
    this.age = age; 
    this.gender = gender; 
    this.interests = interests
}

Person.prototype.greeting = function () {
        console.log(`Hi...I'm ${this.name.first}`)
}

const person1 = new Person('Ashish Kumar','Rena', 28, 'Male', 'AI and Robotics');

person1.greeting();

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this,first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype.teacherDetails = function () {
    console.log(`Teacher Name ${this.name.first} and Subject is ${this.subject}`);
}

const teacher1 = new Teacher('Charu Hashi','Rena',32,'Male','Mobile Devices','VLSI');

teacher1.teacherDetails();

console.log(Object.getOwnPropertyNames(Teacher.prototype))
console.log(Object.getOwnPropertyNames(Person.prototype))

Teacher.prototype = Object.create(Person.prototype);
console.log(Object.getOwnPropertyNames(Teacher.prototype));

Teacher.prototype.greeting = function () {
    let prefix;
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Ms.';
    } else {
      prefix = 'Mx.';
    }
    console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
}