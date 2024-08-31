import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Users() {

    const [usersList, setUsersList] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);


    async function fetchAllUsers() {
        try {
            setDataLoading(true)
            const apiResponse = await fetch('http://dummyjson.com/users');
            const result = await apiResponse.json();
            if (result.users.length > 0) {
                setUsersList(result.users)
                setDataLoading(false)
            } else {
                setDataLoading(false)
                setUsersList([]);
            }

            console.log('result: ', usersList);

        } catch (err) {
            console.log('err', err);
            setDataLoading(false)

        }
    }

    const handleUserClick = () => {
        fetchAllUsers();
    }
    // useEffect(() => {
    //     fetchAllUsers();
    // }, []);


    if(dataLoading){
        return <p> Fetching the data. Please wait...</p>
    }

    return (
        <div>
            <button onClick={handleUserClick}>Click me</button>
            <h1>List of users</h1>
            <ul>
                {
                    usersList && usersList.length > 0 ? (
                        usersList.map(item => (
                            <li key={item?.id}>
                                <p>
                                    {item?.firstName} {item?.lastName}
                                </p>
                            </li>
                        ))
                    ) : <p> No users found</p>

                }
            </ul>
        </div>
    )
}
