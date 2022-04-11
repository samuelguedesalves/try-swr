import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { User } from "../../types/User";
import { Container } from "./styles";

export const UsersListage: React.FC = () => {
  const { data: users } = useFetch<User[]>('/users');

  return (
    <Container>
      <div className="content">
        {
          !users
            ? <p>Carregando...</p>
            : (
              <ul>
                {
                  users.map(user => (
                    <li>
                      <Link
                        to={`/users/${user.id}`} key={user.id}
                        className="item"
                      >
                        {user.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            )
        }
      </div>
    </Container>
  );
}