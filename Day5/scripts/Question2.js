class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
        this.luCoins = 0;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
}


class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user,course){
        let arr = user.courses.filter(c => c !== course);
        user.courses = arr;
        console.log(user);
    }
 }

 let user1 = new User('Dilip',25,'dilip@gmail.com');
 let user2 = new User('Krishnan',24,'k@gmai.com');
 let mod = new Moderator('Berlin',24,'b@gmail.com');
 let admin = new Admin('Rio',25,'r@gmail.com');
 let users = [user1,user2,mod,admin];
 
 users.forEach(element => {
    console.log(element);
});
mod.addCoins().addCoins().removeCoins().addCoins();

admin.addCourse(user1,"Javascript");
admin.addCourse(user1,"Python");
admin.deleteCourse(user1,"Javascript");