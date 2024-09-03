import { useContext } from "react"
import { UserContext } from "./context";



export const Footer = () => {
  const {user}  = useContext(UserContext);
  return (
    <div>{user.email}</div>
  )
}
