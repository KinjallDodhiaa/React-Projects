import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from './pages/blog';
import ErrorPage from './pages/errorPage';
import ContactPage from './pages/contactPage';
import Pagefooter from './components/pagefooter';
import ProductDetails from './components/shop/productDetails';

const App = () => {

  //if we want to fetch the data

  // useEffect(()=> {
  //here we can fetch data
  // }, [])

  const products = [
    {
      id: 123451,
      title: "title1",
      price: 50,
      imgURL: "/images/home/product1.jpg",
    },
    {
      id: 123452,
      title: "title2",
      price: 80,
      imgURL: "/images/home/product2.jpg",
    },
    {
      id: 123453,
      title: "title3",
      price: 50,
      imgURL: "/images/home/product3.jpg",
    },
    {
      id: 123454,
      title: "title4",
      price: 100,
      imgURL: "/images/home/product4.jpg",
    },
    {
      id: 123455,
      title: "title5",
      price: 20,
      imgURL: "/images/home/product5.jpg",
    },
    {
      id: 123456,
      title: "title6",
      price: 75,
      imgURL: "/images/home/product6.jpg",
    }
  ];
    return (
      <Router>
        <PageHeader />

        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contactPage">
            <ContactPage />
          </Route>
          <Route path="/productDetails/:id">
            <ProductDetails products={products} />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>

        <Pagefooter />
      </Router>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

