import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <TeamPage/>
      <Routes>
      <Route path='/TeamPage' element={<TeamPage/>}/>
        <Route path="/TeamMemberPage" element={<TeamMemberPage/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;

