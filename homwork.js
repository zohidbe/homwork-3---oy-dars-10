function User(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.displayInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`);
    };
    this.isAdult = function() {
        return this.age >= 18;
    };
}

function createUsers() {
    let userCount = prompt("nechta user yaratmoqchisiz?");
    userCount = parseInt(userCount);
    let users = [];

    for (let i = 0; i < userCount; i++) {
        let name = prompt("user ni ismni kiritng:");
        let age = prompt("user ni yoshini kiriting:");
        age = parseInt(age);
        let location = prompt("userni lacationini kiriting:");

        users.push(new User(name, age, location));
    }

    return users;
}

let usersArray = createUsers();
console.log(usersArray);
