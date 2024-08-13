const users = [
    {
        userName: 'User1',
        userEmail: 'user1@gmail.com',
        eyeColor: 'Green',
        gender: 'female',
        isActive: 'active',
        age: 18
    },
    {
        userName: 'User2',
        userEmail: 'user2@gmail.com',
        eyeColor: 'Blue',
        gender: 'male',
        isActive: 'active',
        age: 9
    },
    {
        userName: 'User3',
        userEmail: 'user3@gmail.com',
        eyeColor: 'Dark brown',
        gender: 'female',
        isActive: 'inactive',
        age: 16
    }
]

// №1

const userNamesArray = users.map(userObject => userObject.userName);
console.log(userNamesArray);

// №2

const usersEyeColorArray = users.map(userObject => userObject.eyeColor);
console.log(usersEyeColorArray);

// №3

const userObjectFemale = users.filter(object => object.gender === 'female').map(object => object.userName)
const userObjectMale = users.filter(object => object.gender === 'male').map(object => object.userName)
console.log(userObjectFemale, userObjectMale);

// №4

const userObjectActive = users.filter(object => object.isActive === 'active').map(object => object.userName)
const userObjectInactive = users.filter(object => object.isActive === 'inactive').map(object => object.userName)
console.log(userObjectActive, userObjectInactive);

// №5

const checkedEmail = 'user1@gmail.com';
const userByEmail = 'Ваш користувач - ' + users.filter(object => object.userEmail === checkedEmail).map(object => object.userName).toString()
console.log(userByEmail);

// №6

const usersAgeCategory =  users.filter(object => object.age >= 12 && object.age <= 18).map(object => object.userName) + ' - ці юзери підлітки';
console.log(usersAgeCategory);