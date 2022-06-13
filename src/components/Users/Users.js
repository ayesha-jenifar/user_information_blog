import React from "react";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import { API_HOST_URL } from "../../configs";

const Users = () => {

  //Notes: change variables name later
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();  

  useEffect(()=> {
    axios.get(API_HOST_URL + "/users").then( (data) => {
      setUsers(data.data);
    }).catch((err) => {
      console.log("err", err);
    }); 
  },[])

  const onClickUser = (id) => {
    const userURL = "/userInfo/" + id;
    return navigate(userURL);
  };

  return (
    <div className="gimme-space">
      <h1>USERS</h1>
      <div className="container d-flex flex-wrap">
        {users.map((user) => (
          <UserCard key={user.id} onClick={onClickUser} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
