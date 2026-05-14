'use server'
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";


interface User { 
    firstName: string;
    lastName: string;
    id:string
};
export const createUser = async (prevSate: any, formData: FormData) => {
    // get the firstName from the input field
    await new Promise((resolve) => setTimeout(resolve, 100));
    const firstName = formData.get('firstName') as string;
    // grt the lastName from the input field
    const lastName = formData.get('lastName') as string;
    const newUser: User = { firstName, lastName, id: Date.now().toString() }
    console.log(prevSate);
    
    try {
        //throw new Error(' there was an error') faking an error
        await saveUser(newUser);
        // some logic
        revalidatePath('/actions') // revalidating the actions page ie to reload the Actions page
        return 'user created succesfully'
    } catch (error) {
        // errror message
        return 'failed to create user'
    };
};

// we have to fetch the users and push the new user to it 
// after we fetch the user we have to revalidate the page we will display the users to update it whenn an new user is added
export const fetchUsers = async (): Promise<User[]> => { 
    const results = await readFile('users.json', { encoding: 'utf8' });
    const users = results ? JSON.parse(results) : []; // converting users into an object
    return users;
};


// we have push the new user to the list of users and updated the users.json file
export const saveUser = async (user:User):Promise<void> => { 
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));  // converting users into a string
};

// action to delete users
export const deleteUserAction  = async (formData: FormData) => {
    const userId = formData.get('id') as string;
    const users = await fetchUsers();
    const updateUsers = users.filter((user: User) => user.id !== userId);
    await writeFile('users.json', JSON.stringify(updateUsers));
    revalidatePath('/actions') 
};
 

// this method is secured because users can not see the useId in the html component
export const removeUserAction = async (userId: string, formData: FormData) => { 
    const userName = formData.get('name') as string;
    console.log(userName);

    const users = await fetchUsers();
    const updateUsers = users.filter((user: User) => user.id !== userId);
    await writeFile('users.json', JSON.stringify(updateUsers));
    revalidatePath('/actions');
};