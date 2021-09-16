import React, { useState, useEffect } from 'react';


import Loading from '../components/Loading';

const Users = () => {
    const[users, setUsers] = useState([]);
    const[isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            });
    }, []);


    return (
        <>
            <Loading visible={isLoading} />
            { 
                users.map(user => {
                    return (
                        <div style={{margin: '10px'}}>
                            <b>Nome: </b> {user.name} <br />
                            <b>Email: </b> {user.email} <br />
                            <b>Username: </b> {user.username} <br />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users;