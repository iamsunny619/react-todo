import UserProfile from "./component/UserProfile";
import UserContextProvider from "./context/UserContextProvider";
import "./styles.css";

export default function App() {
  return (
    <UserContextProvider>
      <UserProfile />
    </UserContextProvider>
  );
}
