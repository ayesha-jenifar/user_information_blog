
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST_URL } from "../../configs";
import { useParams } from "react-router-dom";

const UserInfo = () => {

  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(()=> {
    axios.get(API_HOST_URL + "/users/" + id).then( (data) => {
      //actions for data
      setUser(data.data);
    }).catch((err) => {
      console.log("err", err);
    }); 
  },[id])

  return (
    <div id={id} className="userInfo">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.phone}</p>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.website}</p>
          <p className="card-text">{user.company && user.company.name}</p>
          <p className="card-text">{user.address && user.address.suite + " " + user.address.street + " " + user.address.zipcode}</p>
        </div>
      </div>
  );
};

export default UserInfo;
