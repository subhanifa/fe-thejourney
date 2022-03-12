import { Route, Routes } from 'react-router';
import './assets/styles/App.css';
import Modal from './components/modals';
import Nav from './components/Nav';
import { RegisterProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import AddJourney from './pages/AddJourney';
import Bookmarks from './pages/Bookmarks';
import LandingPages from './pages/LandingPages';
import Profile from './pages/Profile';


function App() {

  return (
    <>
    <ModalProvider>
      <RegisterProvider>
        <Nav/>  
        <Modal/>
      </RegisterProvider>
    </ModalProvider>

        <Routes>
          <Route>
            <Route path='/' element={<LandingPages />}/>
            <Route path='/my-profile' element={<Profile />}/>
            <Route path='/add-journey' element={<AddJourney />}/>
            <Route path='/my-bookmark' element={<Bookmarks />}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
