'use server'
import { isUtf8 } from "buffer";
import { readFile, writeFile } from "fs/promises";

interface User { 
    firstName: string;
    lastName: string;
    id:string
};
export const createUser = async (formData: FormData) => {
    // get the firstName from the input field
    const firstName = formData.get('firstName') as string;
    // grt the lastName from the input field
    const lastName = formData.get('lastName') as string;
    const newUser: User = { firstName, lastName, id: Date.now().toString() }
    await saveUser(newUser);
};

// we have to fetch the users and push the new user to it 
export const fetchUsers = async (): Promise<User[]> => { 
    const results = await readFile('users.json', { encoding: 'utf8' });
    const users = results ? JSON.parse(results) : [];
    return users;
};


// we have push the new user to the list of users and updated the users.json file
const saveUser = async (user:User):Promise<void> => { 
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
};