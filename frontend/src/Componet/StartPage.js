import React from 'react';
import { Link } from "react-router-dom";



export default function StartPage() {
    return (
        <>

            <main>
                <h1> This is start page </h1>
                
                <Link to="/design">START</Link>
                
            </main>
        </>
    )
}