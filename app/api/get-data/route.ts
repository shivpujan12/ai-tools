import data from '../../data.json';
import {NextResponse} from "next/server";
export async function GET(req: Request) {
    return NextResponse.json(data);
}