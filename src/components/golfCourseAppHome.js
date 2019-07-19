import React from 'react';
import '../App.css';
import AddEmployee from './addEmployee';
import AddJob from './addJobs';


    const Homepage = () => {
        return (
            <>
                <div className='home-wrap'>
                    <div className='home-photo'></div>
                    <h1 className='home-title'>Welcome to the Golf Course App!</h1>
                    <div className='par-wrap'>
                        <AddEmployee />
                        <AddJob />
                    </div>
                </div>
            </>
        )
}
    
export default Homepage;