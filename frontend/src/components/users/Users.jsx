import React, { useState } from "react";
import { useGetUsersQuery } from "../../context/api/usersApi";
import "./users.css";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Users = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(3);
    // const [skip, setSkip] = useState(1);

    const { data } = useGetUsersQuery({
        skip: page,
    });

    const handleChange = (event, value) => {
        setPage(value);
    };

    let pageCount = Math.floor(data?.total % limit) || 0;
    console.log(pageCount);

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
        <>
            <div className="users">
                <div className="users__cards">{usersItems}</div>
                <div className="pagination">
                    <Stack spacing={2}>
                        <Pagination
                            count={pageCount}
                            page={page}
                            onChange={handleChange}
                        />
                    </Stack>
                </div>
            </div>
        </>
    );
};

export default Users;
