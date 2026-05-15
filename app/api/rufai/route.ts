import { NextRequest, NextResponse } from "next/server";
import { fetchUsers, saveUser } from "@/utils/actions";

type ApiUser = {
    id: number;
    name: string;
}
export const GET = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get('id');
    console.log(request.url);
    
    console.log(id);
    

    const users = await fetchUsers();
    //const mumin: ApiUser[] = [{ id: 15, name: 'Queit Developer' }, { id: 57, name: 'HENNGE Intern' }];
    return NextResponse.json(users)
};

export const POST = async (request:Request) => { 
    const user = await request.json(); //created the user during the POST request 
    const newUser = { ...user, id: Date.now().toString() };
    console.log(newUser);
    
    await saveUser(newUser);
    return Response.json({ msg: 'user added sucessfully' })
};