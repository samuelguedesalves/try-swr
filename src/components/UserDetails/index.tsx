import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { User } from "../../types/User";
import { Container } from "./styles";

export const UserDetails = () => {
  const params = useParams();

  const { data: user } = useFetch<User>(`http://localhost:3000/api/users/${params.id}`);

  return (
    <Container>
      <div className="content">
        {
          !user
            ? <p>Carregando...</p>
            : (
              <div className="details" >
                <p><span>id:</span> {user.id}</p>
                <p><span>name:</span> {user.name}</p>
                <p><span>bio:</span> {user.bio}</p>
              </div>
            )
        }
      </div>
    </Container>
  )
}