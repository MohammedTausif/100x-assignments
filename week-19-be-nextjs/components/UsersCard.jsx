import Link from "next/link"
import Image from "next/image";
function UsersCard({data}){
    return (
        <div className="w-56 h-80 border-black shadow-lg rounded bg-white ">
            <div className="flex flex-col">
                <div className="mt-4 flex justify-center items-start">
                    <img
                    src={data.image}
                     alt={data.name}
                     width={100}
                     height={100}
                     className="rounded-full size-28 overflow-hidden"
                    />

                </div>
                <div className="flex flex-col mt-5 w-full items-center">
                    <h1 className="text-black font-semibold"><span className="">Name : </span>{data.name}</h1>
                    <h2>{data.About}</h2>
                </div>
                <div className="mt-12 flex justify-center items-end">
                    <button className="h-full   py-2 px-4 bg-black text-white w-28 rounded cursor-pointer">
                        <Link target="_blank" className="flex justify-center items-center text-white font-semibold text-sm hover:text-gray-200" href={`${data.wiki}`}> Read More </Link>
                    </button>
                </div>
                <div>

                </div>

            </div>



        </div>
    )
}
export default UsersCard