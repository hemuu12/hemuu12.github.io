import React from "react";
import BaseLayout from "./layouts/baseLayout";
import { BrowserRouter } from "react-router-dom";
const App = () => 
{
    return (
        <>
            <BrowserRouter>
                 <BaseLayout />;
            </BrowserRouter>
           
        </>
      
    )
}




export default App;
