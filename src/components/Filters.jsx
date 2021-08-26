import React from 'react'
import { setFilter } from '../redux/features/filterSlice'
import { useDispatch } from 'react-redux'



const Filters = ({isDesktop}) => {
    const options = ['ALL', 'ACTIVE', 'COMPLETED'];
    const dispatch = useDispatch();


    return (
        <div className={`todocontainer filters ${isDesktop? 'filters--desktop': ''}`}>
            {options.map((option, index)=> {
                return (
                    <button 
                    key={index}
                    onClick={()=> dispatch(setFilter(option))}
                    className="filters__button">
                        {option}
                    </button>
                )
            })}
        </div>
    )
}

export default Filters;