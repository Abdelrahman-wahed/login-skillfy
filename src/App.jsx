import Login from "./components/Login";
import WhoAreYou from "./components/WhoAreYou";
import DoYouLike from "./components/DoYouLike";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import SetPassword from "./components/SetPassword";
import Verify from "./components/Verify";
function App() {
  return (
    <div className=" space-y-4">
      <Login />
      <WhoAreYou />
      <DoYouLike />
      <SignUp />
      <ResetPassword />
      <Verify />
      <SetPassword />
    </div>
  );
}

export default App;
