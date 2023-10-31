import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Foot from './Pages/Foot';
import Head from './Pages/Head';
import History from './Components/History';


function App() {
  return (
    <div className="App">
      <Head></Head>
<Routes>

<Route path='/' element={<Landing></Landing>}> </Route>
    <Route path='/home' element={<Home></Home>}> </Route>
    <Route path='/watch-history' element={<History></History>}></Route>

</Routes>
<Foot></Foot>
    </div>
  );
}

export default App;
