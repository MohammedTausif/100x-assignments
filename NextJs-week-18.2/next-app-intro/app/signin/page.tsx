"use client"
export default function signin() {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const handleSignin = (e: any) => {
        e.preventDefault();
        alert("Signed in")
        console.log("Signed in")

    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center ">
           <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-20 py-4 flex">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2 flex flex-col justify-center items-center" >
                    <LabelledInput type='text' placeholder="user@gmail.com" label="signin" />
                    <LabelledInput label="Password" placeholder="password" />
                    <button
                        className="border w-28 bg-blue-700 border-none py-2  rounded-md flex justify-center"
                        type="submit"
                    > Sign in
                    </button>
                    </div>
            </div>
            </a>
        </div>
        </div>
    )
}
interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 p-2.5" placeholder={placeholder} required />
    </div>
}