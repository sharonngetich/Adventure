import React from 'react'

function Navbar() {
    return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>
           <link to='/' className='navbar-logo'>
               TRAVEL <i className='fab fa-typo3' />
               </link>  
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ?'fas fa-times':'fas fas-bars'} />
                </div>  
                <ul className={click ?'nav-menu active' : 'nav-menu'}>  
                <li className='nav-item'>
                <link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </link>
                    </li>
                    <li className='nav-item'>
                <link to='/' className='nav-links' onClick={closeMobileMenu} >
                   Service
                    </link>
                    </li>
                    </ul>
                </div> 
            </nav>
            </>
    )
}

export default Navbar
