import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Components/Header';
import BottomNav from './Components/BottomNav';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Notification from './pages/NotificationPage';

import './App.css';

const AppContent = () => {

  const location = useLocation();

  const hideHeaderRoutes = [
    '/createpost',
    '/profile',
    '/notification'
  ];

  const isHeaderHidden =
    hideHeaderRoutes.includes(location.pathname);

  return (
    <>

      {!isHeaderHidden && <Header />}

      <main className="main-content">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/createpost"
            element={<CreatePost />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/notification"
            element={<Notification />}
          />

          <Route
            path="*"
            element={
              <h2
                style={{
                  textAlign: 'center',
                  marginTop: '50px'
                }}
              >
                404 - Không tìm thấy trang
              </h2>
            }
          />

        </Routes>

      </main>

      <BottomNav />

    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;