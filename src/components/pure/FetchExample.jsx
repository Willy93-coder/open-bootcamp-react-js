import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
    getAllPagedUsers,
    getAllUsers,
    getUserDetails,
} from "../../services/fetchServices";

const FetchExample = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [page, setPages] = useState(2);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log("All users", response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`);
            })
            .finally(() => {
                console.log("Ended obtaining users:");
                console.table(users);
            });
    };

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log("All paged users", response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`);
            })
            .finally(() => {
                console.log("Ended obtaining users:");
                console.table(users);
            });
    };

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log("All paged users", response.data);
                setSelectedUser(response.data);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`);
            })
            .finally(() => {
                console.log("Ended obtaining users:");
                console.table(selectedUser);
            });
    };

    return (
        <div>
            <h2>users:</h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
            ))}
            <p>
                Showing {usersPerPage} users of {totalUsers}
            </p>
            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>

            <h3>User details</h3>
            {selectedUser && (
                <div>
                    <img
                        src={selectedUser.avatar}
                        style={{ height: "50px", width: "50px" }}
                        alt="Imagen usuario"
                    />
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last name: {selectedUser.last_name}</p>
                    <p>Email: {selectedUser.email}</p>
                </div>
            )}
        </div>
    );
};

export default FetchExample;
