import axios from "axios"

async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return response.data
}


export default async function blogs() {
    const blogs = await getBlogs()
    return <div className="h-screen w-full bg-white">
        <div className="h-40 w-full flex flex-col  justify-center items-center">
            <h1 className="text-2xl font-bold text-indigo-700">HELLO ! </h1>
            <span className="text-lg font-semibold"> Welcome to Tasks Blogs</span>
        </div>
        <div className="flex min-h-screen w-[100%] flex-wrap justify-center items-center gap-4 bg-white">
            {
                blogs.map((blog: ITodo, id: number) => <TodoCard title={blog.title} completed={blog.completed} key={id} />)
            }
        </div>
    </div>
}
interface ITodo {
    title: string,
    completed: boolean
}

function TodoCard({ title, completed }: ITodo) {
    return <div className="bg-gray-100 w-52  h-40 rounded flex flex-col  items-center">
        <div className="flex flex-col  p-2 text-black gap-3 justify-center items-center">
            <h1> <span className="text-lg font-semibold">Title:</span>  {title}</h1>
            <h2><span className="text-lg font-semibold">Completed:</span> {completed ? "Done! ✅" : "Not Done ❌"}</h2>
        </div>
    </div>
}