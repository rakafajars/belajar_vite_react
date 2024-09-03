import { useContext } from "react";
import { UserContext } from "./context"

export const Header = () => {

  const {user} = useContext(UserContext);

  return (
    <div>{user.name}</div>
  )
}
