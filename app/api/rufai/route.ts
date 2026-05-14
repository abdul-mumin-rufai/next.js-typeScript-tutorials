import { NextRequest, NextResponse } from "next/server";
import { fetchUsers, saveUser } from "@/utils/actions";
import { URL } from "url";

type ApiUser = {
    id: number;
    name: string;
}
export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    console.log(id);
    console.log(request);
    

    const users = await fetchUsers();
    //const mumin: ApiUser[] = [{ id: 15, name: 'Queit Developer' }, { id: 57, name: 'HENNGE Intern' }];
    return Response.json(users)
};