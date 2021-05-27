import React from 'react';
import Slider from '../components/slider';
import Leftbar from '../components/shop/leftaside';
import Recommendeditems from '../components/recommendeditems';
import Homecomp from '../components/homecomp';

const Home = (props) => {
    console.log(props.products);
    
    let products = props.products;

    return (
        <>
        <Slider/>
		<Homecomp products={products}/>

        </>
    );
};

export default Home;