import React from 'react'
import { useDispatch } from 'react-redux';
import Filters from './Filters';
import {clearTodo} from '../redux/features/todoSlice';


const Footer = ({left}) => {
    const dispatch = useDispatch()
    return (
        <footer className="footer">
            <div className="footer__left">
                <p className="paragraph">
                    {left===1 
                    ? `${left} item left` 
                    : `${left} items left`}
                </p>
            </div>
            <Filters isDesktop={true}/>
            <button
            onClick = {()=> dispatch(clearTodo())}
            className="filters__button">
                Clear completed
            </button>
        </footer>
    )
}


export default Footer 