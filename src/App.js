import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <RouterProvider router={routers}>
        <Navbar />
        <Layout />
        <Footer />
      </RouterProvider>
    );
  }
}