import { User } from "./model/User.model.js";

const test = new User({
    firstName: 'Test2',
    lastName: 'User',
    email: 'test@test.com',
    password: '1234567890'
});

await test.save();