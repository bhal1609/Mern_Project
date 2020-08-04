import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:4000/");
        setUser(result.data.reverse());
    };


    
    const deleteUser = async id => {
        console.log("id = "+id)
        await axios.get("http://localhost:4000/delete?id="+id);
        loadUsers();
    }



    return (
        <div className="container">
            <div className="py-4">
                <h1> List of all Employees </h1>
                
                
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Serial No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                <Button>
                                     <Link className="btn btn-primary" to={`/users/${user._id}`}>{<VisibilityIcon/>}View</Link>
                                     
                                    </Button>
                                     
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user._id)}>{<DeleteForeverIcon/>}Delete</Link>
                                    
                                </td>
                            </tr>
                            
                        ))
                    }
                    </tbody>
                </table>

                

                

            </div>
        </div>
    );
};



export default Home;

