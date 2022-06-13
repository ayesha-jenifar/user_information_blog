import React from "react";

const UserCard = ({ user , onClick }) => {
  const { id, name, phone, email, website , company = {}, address = {} } = user;
  return (
    <div key={id} className="width-18 m-3" onClick={()=> onClick(id)}>
      <div id={id} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{phone}</p>
          <p className="card-text">{email}</p>
          <p className="card-text">{website}</p>
          <p className="card-text">{company.name}</p>
          <p className="card-text">{address.suite + " " + address.street + " " + address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
