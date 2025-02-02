
  "use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import axios from "axios";
import UsersCard from '../../components/UsersCard'

export default function Dashboard() {
    const [users, setUsers] = useState([]); // Users state

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:3000/api/users");
                console.log("fetched data :", response.data.users)
                setUsers(prevUsers => [...prevUsers, ...response.data.users]); // Append new data
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className=" h-screen w-full bg-gray-100">
            <h2 className="flex justify-center p-6 font-semibold text-2xl hover:text-gray-600">Users Profile</h2>
            <div className="flex flex-wrap gap-8 justify-evenly">
                {users.map(user => (<UsersCard data={user} key={user.id}></UsersCard>))
                }
            </div>
        </div>
    );
}



// export default UsersList

