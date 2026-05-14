import { NextResponse } from "next/server";
import { fetchUsers } from "@/utils/actions";

type ApiUser = {
    id: number;
    name: string;
}
export const GET = async () => {
    const users = await fetchUsers();
    //const mumin: ApiUser[] = [{ id: 15, name: 'Queit Developer' }, { id: 57, name: 'HENNGE Intern' }];
    return NextResponse.json(users)
};