import { NextRequest, NextResponse } from "next/server";
import { fetchUsers, saveUser } from "@/utils/actions";
import { URL } from "url";

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
    return NextResponse.redirect(new URL('/', request.url));
};