import { NextResponse, NextRequest } from "next/server";
import { UserModel } from "../users/route";


export async function POST (req){
    const {name,password}= await req.json();
    const user = UserModel.find(user => user.name === name && user.password === password )

    if(!user){
        return NextResponse.json({
            message: "Inavlid Credentials",
        }, { status: 401 })
    }
    return NextResponse.json({
        message: "User Signed In",
        user,
    }, { status: 200 })


}