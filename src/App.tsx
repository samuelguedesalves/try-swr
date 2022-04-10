import React, { useEffect } from 'react';
import { createServer } from 'miragejs';

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
      const id = Number(request.params.id);
      const users = [...schema.db.users];

      const user = users.find(user => user.id === id);

      return user;
    });
  }
})

export const App: React.FC = () => {
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();

      console.log(data);
    }

    loadUsers();
  }, [])

  return (
    <h1>Hello world!</h1>
  );
}
