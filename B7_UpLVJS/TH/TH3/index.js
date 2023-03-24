class User {
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login(username, password){
        if(username == this.username && password == this.password)
            console.log("Login successfully");
        else    
            console.log("Authentication Failed!!");
    }

    setPassword(newpassword){
        this.password = newpassword;
    }

    validateUsernameOrPassword(text){
        if (text.length > 6) {
            return true;
        }
        return false;
    }
}   

class Author extends User {
    constructor(name, username, password, email, numOfPost){
        super(name, username, password);
        this.email = email;
        this.numOfPost = 0;
    }
    
    createPost() {
        this.numOfPost++;
    }

    getNumOfPost() {
        return this.numOfPost;
    }
}

console.log("---Khởi tạo user 1---");
let user1 = new User("user1", "user1", "abcde")
console.log(user1);

console.log("---Đổi mật khẩu user1---");
user1.setPassword("1234");
console.log(user1);

console.log("---Kiểm tra mật khẩu có hợp lệ hay không---");
console.log(user1.validateUsernameOrPassword(user1.password));

console.log("---Khởi tạo author1---");
let author1 = new Author('ex@gmail.com', 'author1', 'author1', '1234567')
console.log(author1);