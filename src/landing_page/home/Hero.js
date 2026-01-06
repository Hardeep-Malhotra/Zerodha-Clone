import React from 'react'

function Hero() {
    return (
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
            </div>

            <h1 className='mt-5'>Inves in everything</h1>
            <p>Onilne platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button  className='p-2 btn btn-primary mb-5' style={{width:"20%" , margin: "0 auto" }}>Signup now</button>
        </div>
    );
}

export default Hero;