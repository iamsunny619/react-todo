import SignIn from "./component/signIn/SignIn";
import SignUp from "./component/signUp/SignUp";
import UserContextProvider from "./state/context/userContext/UserContextProvider";
import "./styles.css";

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <div>
          <SignUp />
        </div>
      </div>
    </UserContextProvider>
  );
}
