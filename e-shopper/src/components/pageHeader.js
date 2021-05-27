import React from 'react';
import BarBottom from './headerBars/headerBottom';
import BarMiddle from './headerBars/headerMiddle';
import BarTop from './headerBars/headerTop'

const PageHeader = () => {
    return (
        <header id="header">
            <BarTop/>
            <BarMiddle/>
            <BarBottom/>
        </header>
    );
};

export default PageHeader;