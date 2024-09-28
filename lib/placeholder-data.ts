import { hashSync } from "bcryptjs";

const users = [
    {
        id: '1734-1234-1234',
        name: 'Molotsi',
        email: 'molotsi@makhee.com',
        password: hashSync('password', 10)
    }
];

export { users };