import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Info</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Username:</strong> {data.username}</p>
    </div>
  );
};

export default UserData;
