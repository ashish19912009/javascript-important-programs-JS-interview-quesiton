class Person {
    constructor(first, last, age, gender,interests) {
        this.name = {
            first,
            last
        }
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting(){
        console.log(`Hi ${this.name.first} ${this.name.last}`);
    }
}

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject) {
        super(first, last, age, gender, interests);
        this.subject = subject;
    }

    teacherDetails() {
        console.log(`Teacher Details are follows \n Name : ${this.name.first},\n 
                     Age : ${this.age}. \nHe teaches : ${this.subject}`)
    }
}

const teacher1 = new Teacher('Ashish Kumar','Rena', 28, 'Male','Cricket','React.JS');

teacher1.greeting();
teacher1.teacherDetails();
