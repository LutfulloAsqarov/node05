import React from "react";
import { useGetUsersQuery } from "../../context/api/usersApi";
import "./users.css";

const Users = () => {
    const { data } = useGetUsersQuery();

    console.log(data);
    let usersItems = data?.payload?.map((user) => (
        <div key={user._id} className="users__card">
            <div className="card__info">
                <h3>{user.fname}</h3>
                <h3>{user.lname}</h3>
                <p>{user.age}</p>
                <div className="btns">
                    <button className="delete__btn">delete</button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="users">
            <div className="users__cards">{usersItems}</div>
        </div>
    );
};

export default Users;
