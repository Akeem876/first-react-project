/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

let url = fetch(" https://api.github.com/users");

const GetUsers = () => {
 const [users, setUsers] = useState([]);

 const fetchUsers = async () => {
  const users = await url;
  const data = await users.json();

  setUsers(data);
 };

 useEffect(() => {
  fetchUsers();
 }, []);
 return (
  <>
   <div className="getUsers">
    {users.map((user) => {
     const { login, id, avatar_url, html_url } = user;
     return (
      <div key={id} className="userList">
       <img src={avatar_url} alt={login} />
       <ul>
        <li>{login}</li>
        <li>
         <a href={html_url}>Profile</a>
        </li>
       </ul>
      </div>
     );
    })}
   </div>
  </>
 );
};

export default GetUsers;
