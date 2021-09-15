import React from 'react'
import { Footer } from './Footer/Footer'
import { Integrado } from './Integrado/Integrado'
// import { NavBar } from './NavBar/NavBar'


export const App = () => {
    return (

        <div className="page-container">
            <div className="caja2">
                {/* <NavBar /> */}
                {/* <Sidebar />
                <Main />
                */}

                <Footer />

                <Integrado />

            </div>

        </div>

    )
}
