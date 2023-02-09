import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Kapil Soni',
      image:
        'https://media.licdn.com/dms/image/C4D03AQESFsDutYQ9Zg/profile-displayphoto-shrink_800_800/0/1654535044335?e=1679529600&v=beta&t=8yvFYicGTTXPTARFCPFMjQ_t4ImYOMmrJxR7P_v7tSQ',
      college: "IIIT Naya Raipur"
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
