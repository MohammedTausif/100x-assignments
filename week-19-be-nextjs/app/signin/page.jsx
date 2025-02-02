"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'

 const Signin=()=> {
    const [error, setError] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")
    const [userData, setUserData]= useState([])
    const router = useRouter();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
       try{
        const user =  await axios.post('/api/signin', {
                name : username,
                password : password
        })
   console.log("user :", user)
        if(!user){
            return
        }
        alert("Login successfull")
        setUserData(user.data.user)
        router.push("/dashboard")
       }catch(e){
        setError( e.response.data.message || "Something went wrong")
        console.log(error)
       }

   

    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold text-center mb-6">Sign In</h2>
        <form 
        onSubmit={handleSubmit} 
        className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Username</label>
                <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={username}
                    placeholder="Name"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                    type="password"
                    className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
                type="submit"
                className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-700 transition"
            >
                Sign In
            </button>
        </form>
    </div>
</div>
  )
}

export default Signin