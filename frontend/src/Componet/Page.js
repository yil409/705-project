import React from 'react';
import 'antd/dist/antd.css';
import { Outlet} from "react-router-dom";

export default function Page() {
    return (
        <>

            <main>
                <Outlet />
            </main>
        </>
    )
}