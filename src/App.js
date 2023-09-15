import Timer from './Components/Timer.jsx'
import Signin from './Components/Signin.jsx';
import Signup from "./Components/Signup";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Signup/>}></Route>
  <Route path="signin" element={<Signin/>}></Route>
  <Route path='timer' element={<Timer></Timer>}> </Route>
</Routes>

    </div>
  );
}

export default App;
