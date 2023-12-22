import "./App.css";

import AuthContextProvider from "../src/store/context/auth-context";
import RootNavigation from "./navigation/RootNavigation";

function App() {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  );
}

export default App;
