import React from 'react';
import { createServer } from 'miragejs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsersListage } from './components/UsersListage';
import { UserDetails } from './components/UserDetails';
import { Header } from './components/Header';

import { GlobalStyles } from './styles/global';

createServer({
  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          name: 'josé',
          bio: 'a generic bio'
        },
        {
          id: 2,
          name: 'maria',
          bio: 'other generic bio'
        },
        {
          id: 3,
          name: 'joão',
          bio: 'more one generic bio'
        },
      ],
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/users", (schema, request) => {
      return schema.db.users;
    });

    this.get('/users/:id', (schema, request) => {
      const id = request.params.id;
      const users = [...schema.db.users];

      const user = users.find(user => user.id === id);

      return user;
    });
  }
});

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersListage />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};
