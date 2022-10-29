import React from 'react';
import { Layout } from 'antd';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './views/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        // <>
        //     <Register/>
        // </>
        <Router>
            <Layout>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
