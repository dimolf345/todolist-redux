import React from 'react';

const Header = ({theme, handleClick}) => {


    return (
    <header className={`header header--${theme} u-margin-bottom-medium`}>
        <h1 className="heading">todo</h1>
        <button
        onClick={handleClick}
         className={`header__button header__button--${theme}`}></button>
    </header>
    )

}


export default Header;