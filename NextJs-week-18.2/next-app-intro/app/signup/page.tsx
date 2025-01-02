"use client"
import { useState } from "react"


export default function signup(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    function handleSignup(e: any){
        e.preventDefault();
        alert("signed up with email :" + email +"  " + "password : "+password )
        console.log("Signed up with email :", email , "password : " , password)
    }
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center ">
        <div className="border px-12 py-16 rounded ">
        <h1 className="text-2xl font-semibold flex justify-center ">Sign Up</h1>
        <form onSubmit={handleSignup}
            className="flex flex-col p-2 gap-3 justify-center items-center">
            <input
                className="px-6 py-2 rounded text-black"
                type="email"
                placeholder="Enter email"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className="px-6 py-2 rounded "
                type="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button 
            className="border w-28 flex justify-center bg-blue-700 py-2 rounded-md border-none"
            type="submit"
            > Sign up
            </button>
        </form>
            </div>
    </div>
    )
}