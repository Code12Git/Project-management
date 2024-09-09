import React from 'react'
import Navbar from '../base/Navbar'
import Info from '../components/Landing/Info'
import Action from '../components/Landing/Action'
import GetStarted from '../components/Landing/GetStarted'

const Landing = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Info />
            <Action />
            <GetStarted />
        </React.Fragment>

    )
}

export default Landing