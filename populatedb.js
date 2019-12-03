var Product = require('./models/product');
var Role = require('./models/role');
var User = require('./models/user');
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var products = [
    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/19.jpg',
        id: '01',
        name: 'Áo sơ mi nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 500000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/21.jpg',
        id: '02',
        name: 'Giày lười nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 300000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/24.jpg',
        id: '03',
        name: 'Áo khoác nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 600000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/7.jpg',
        id: '04',
        name: 'Áo sơ mi nam mỏng',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 400000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/22.jpg',
        id: '05',
        name: 'Giày nữ',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 200000
    }),
    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/25.jpg',
        id: '06',
        name: 'Áo khoác nam không tay',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 700000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/20.jpg',
        id: '07',
        name: 'Áo sơ mi nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 1000000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/23.jpg',
        id: '08',
        name: 'Giày thể thao nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 900000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/26.jpg',
        id: '09',
        name: 'Áo khoác ngoài',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 1200000
    }),

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
var roles = [
    new Role({
        name: 'ROLE_ADMIN',
        description: 'Quản trị hệ thống'
    }),

    new Role({
        name: 'ROLE_MANAGER',
        description: 'Quản lý'
    }),

    new Role({
        name: 'ROLE_USER',
        description: 'Người dùng'
    }),
    new Role({
        name: 'ROLE_EMPLOYEE',
        description: 'Nhân viên'
    })



]

for (var i = 0; i < roles.length; i++) {
    roles[i].save(function (err, result) {
    });
}
var users = [
    new User({
        username: 'super admin',
        email: 'superadmin@gmail.com',
        password: '123456',
        role:  roles[0]
    })


]
for (var i = 0; i < users.length; i++) {
    users[i].save(function (err, result) {
    });
}



function exit() {
    mongoose.disconnect();
}

