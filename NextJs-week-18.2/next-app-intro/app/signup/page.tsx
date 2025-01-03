"use client"
import Link from "next/link"
import { useState } from "react"


export default function signup(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    function handleSignup(e: any){
        e.preventDefault();
        alert("signed up with email :" + email)
        console.log("Signed up with email :", email , "password : " , password)
    }
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center ">
        <div className="border px-12 py-16 rounded bg-white ">
        <h1 className="text-3xl text-black font-semibold flex justify-center ">Sign Up</h1>
        
        <form onSubmit={handleSignup}
            className="flex flex-col p-2 gap-3 justify-center items-center ">
            <LabelledInput label="Firstname" placeholder='John' type='text'/>
            <LabelledInput label="Username" placeholder='alexjohn@gmail.com' type='text' onChange={(e: any)=> setEmail(e.target.value)}/>
            <LabelledInput label="Password" placeholder='password' type='password'/>
            <Link href={'/signin'}> <button 
            className="border w-28 flex justify-center bg-blue-700 text-white py-2 rounded-md border-none"
            type="submit"
            > Sign up
            </button> </Link>
            
        </form>
            </div>
    </div>
    )
}
interface  InputProps{
    label: string,
    placeholder : string,
    type? : string,
    onChange? : any
}

function LabelledInput({ label, placeholder, type , onChange}: InputProps){
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-2 ">{label}</label>
        <input type={type || 'text'} placeholder={placeholder} required
        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-10 p-2.5"  
        onChange = {onChange}
        />
    </div>
}
