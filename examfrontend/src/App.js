// import logo from "./logo.svg";
// import "./App.css";

import Registration from "./components/registationForm";
import Login from "./components/loginForm";
import Navbar from "./components/navbar";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div>
      <Navbar></Navbar>
      <Registration></Registration>
      <Login></Login>
    </div>
  );
}

export default App;
