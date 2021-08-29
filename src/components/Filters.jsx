import React, {useRef } from 'react'
import { setFilter } from '../redux/features/filterSlice'
import { useDispatch, useSelector } from 'react-redux'



const Filters = ({isDesktop}) => {
    const options = ['all', 'active', 'completed'];

    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filter)

    return (
        <ul className={`todocontainer filters ${isDesktop? 'filters--desktop': 'filters--mobile'}`}>
            {options.map((option, index)=> {
                return (
                    <li key={index}> 
                    <button 
                    onClick={()=> {                   
                        dispatch(setFilter(option))
                    }}
                    className={`filters__button ${option === currentFilter? 'active' : ''}`}>
                          {option} 
                    </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Filters;