import axios from "axios";
import { useEffect, useState } from "react";

export  function useContent() {
const [users, setUsers]= useState([])

  async function refresh(){
    await axios.get('http://localhost:3000/api/users')
    .then(response=> setUsers(response.data))
  }

  useEffect(()=>{
    refresh()
  },[])

  return {users, useContent}
}


