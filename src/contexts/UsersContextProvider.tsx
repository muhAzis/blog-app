'use client';
import { User, UserInput } from '@/types/user.type';
import React, { createContext, useEffect, useState } from 'react';

export const UsersContext = createContext({
  users: [] as User[],
  loading: false,
  endOfPage: false,
  setLoading: (loading: boolean) => {},
  nextPage: () => {},
  fetchUsers: () => {},
  fetchUsersByName: (name: string) => {},
  addUser: ({ name, email, gender, status }: UserInput) => {},
  updateUser: ({ id, name, email, gender, status }: User) => {},
  deleteUser: (user_id: number) => {},
});

interface Props {
  children: React.ReactNode;
}

const UsersContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [endOfPage, setEndOfPage] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async (refresh: boolean = false) => {
    try {
      setLoading(true);
      const response = await fetch(`https://gorest.co.in/public/v2/users?page=${page}&per_page=15`);
      const data = await response.json();

      if (data.length === 0) setEndOfPage(true);
      refresh ? setUsers(data.sort((a: User, b: User) => a.name > b.name)) : setUsers((prev) => [...prev, ...data.sort((a: User, b: User) => a.name > b.name)]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsersByName = async (name: string) => {
    try {
      if (name.length > 0) {
        setLoading(true);
        const response = await fetch(`https://gorest.co.in/public/v2/users?name=${name}`);
        const data = await response.json();

        setUsers(data.sort((a: User, b: User) => a.name > b.name));
        setLoading(false);
      } else {
        fetchUsers(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async ({ name, email, gender, status }: UserInput) => {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/users', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          gender,
          status,
        }),
      });

      if (response.status === 201) {
        fetchUsers(true);
        alert('User added successfully!');
      } else {
        alert('Failed to add user!');
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async ({ id, name, email, gender, status }: User) => {
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          gender,
          status,
        }),
      });

      if (response.status === 200) {
        fetchUsers(true);
        alert('User edited successfully!');
      } else {
        alert('Failed to edit user!');
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (user_id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`https://gorest.co.in/public/v2/users/${user_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      });

      if (response.status === 204) {
        setPage(1);
        fetchUsers(true);
        setLoading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const value = {
    users,
    loading,
    endOfPage,
    setLoading,
    nextPage,
    fetchUsers,
    fetchUsersByName,
    addUser,
    updateUser,
    deleteUser,
  };

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};

export default UsersContextProvider;
