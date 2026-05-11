'use server'
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";


interface User { 
    firstName: string;
    lastName: string;
    id:string
};
export const createUser = async (formData: FormData) => {
    // get the firstName from the input field
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const firstName = formData.get('firstName') as string;
    // grt the lastName from the input field
    const lastName = formData.get('lastName') as string;
    const newUser: User = { firstName, lastName, id: Date.now().toString() }
    await saveUser(newUser);
    revalidatePath('/actions') // revalidating the actions page ie to reload the Actions page
};

// we have to fetch the users and push the new user to it 
// after we fetch the user we have to revalidate the page we will display the users to update it whenn an new user is added
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