'use strict';

let user1 = {
    username: 'batman',
    password: 'hunter2'
};
console.log(user1);
console.log(typeof(user1));

if (user1.username == 'batman' && user1.password == 'hunter2') {
    console.log('Access Granted');    
} else {
    console.log('Access Denied');
}

let user2 = {
    username: 'wonderwoman',
    password: '123123',
    greetUser() {
        console.log('Hello, I am', this.username);
    },
    updateUsername(newUsername) {
        user2.username = newUsername;
    }
};

user2.greetUser();
user2.updateUsername('Daiane');
user2.greetUser();