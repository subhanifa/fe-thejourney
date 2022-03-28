import { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import './assets/styles/App.css';
import PrivateRoute from './components/auth/PrivateRoute';
import Modal from './components/modals';
import Nav from './components/Nav';
import { API, setAuthToken } from './config/api';
import { LoginContext, RegisterProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { UserContext } from './contexts/UserContext';
import AddJourney from './pages/AddJourney';
import Bookmarks from './pages/Bookmarks';
import LandingPages from './pages/LandingPages';
import Profile from './pages/Profile';
import StoryDetail from './pages/StoryDetail';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [login, setLogin] = useContext(LoginContext);
  const [state, dispatch] = useContext(UserContext);
  
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (!state.isLogin) {
      setLogin(false);
      navigate("/");
    } else {
      setLogin(true);
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);



  return (
    <>
    <ModalProvider>
      <RegisterProvider>
        <Nav/>  
        <Modal/>
      </RegisterProvider>

        <Routes>
          <Route>
            <Route path='/' element={<LandingPages />}/>
            <Route path='/story/:id' element={<StoryDetail/>} />
            
              <Route exact path="/" element={<PrivateRoute/>} > 
                <Route path='/profile/:fullname' element={<Profile />} />
                <Route path='/add-journey' element={<AddJourney />} />
                <Route path='/my-bookmark' element={<Bookmarks />} />
                {/* <Route path='/bookmark/:id' element={<StoryDetail/>} /> */}
              </Route>
            
          </Route>
        </Routes>
    </ModalProvider>
    </>
  );
}

export default App;
