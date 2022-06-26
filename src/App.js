import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
