import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import ProductList from "./pages/Product-List";

const App = () => {


    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProductList/>}/>

                    {/*<Route  path="*" element={<Page404/>}/>*/}

                </Routes>
            </BrowserRouter>
            <FullscreenLoader/>
        </Fragment>
    );
}

export default App;