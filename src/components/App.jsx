import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../store';

import Contacts from './contacts/Contacts';
import Header from './layout/Header';
import About from './pages/About';
import AddContact from './contacts/AddContact';
import NotFound from './pages/NotFound';
import EditContact from './contacts/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <div className="container py-4">
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/about/" element={<About />} />
              <Route path="/contact/add" element={<AddContact />} />
              <Route path="/contact/edit/:id" element={<EditContact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      </Router>
    </Provider>
  );
}

export default App;
