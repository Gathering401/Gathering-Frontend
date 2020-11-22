import React from 'react';
import { useAuth } from '../context/auth';

export default function UserCard(props) {
  const { user } = useAuth();
  const { groupUsers } = props;

  return (
    <>
    </>
  )
}