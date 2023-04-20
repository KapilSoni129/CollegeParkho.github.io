import React from 'react';

import UsersList from '../components/UsersList';
import img from './sui.jpg';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Kapil Soni',
      image: img,
      college: "IIIT Naya Raipur"
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
