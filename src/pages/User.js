import React, { useState, useEffect } from 'react';
import { userLoader } from '../loaders';


const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call the userLoader function to fetch user data
    userLoader()
      .then((data) => {
        // Update the state with the fetched user data
        setUsers(data);

      })
  }, []);

  return (
    <div>
      <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <p key={user.id}>
              <p>ID: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
            </p>
          ))}
        </ul>
    </div>
  );
};

export default UsersPage;
