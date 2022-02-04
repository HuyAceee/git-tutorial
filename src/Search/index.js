import React from 'react';
import { searchProductText, searchProductMax, searchProductMin, searchChangeType } from '../redux/actions'
import { useDispatch } from 'react-redux'


const Search = () => {

    const dispatch = useDispatch()


    const handleInputSearchText = (e) => {
        dispatch(searchProductText(e.target.value))
    }

    const handleInputSearchMax = (e) => {
        dispatch(searchProductMax(e.target.value))
    }

    const handleInputSearchMin = (e) => {
        dispatch(searchProductMin(e.target.value))
    }

    const handleChangeType = (e) => {
        dispatch(searchChangeType(e.target.value))
    }

    return (
        <div>
            <div className="allSearch">
                <div className="blockSearch" >
                    <h2>Type</h2>
                    <select className="search" onChange={handleChangeType}>
                        <option value="All" >All</option>
                        <option value="Houseware" >Houseware</option>
                        <option value="Phone" >Phone</option>
                        <option value="Laptop" >Laptop</option>
                    </select>
                </div>

                <div className="blockSearch">
                    <h2>Name</h2>
                    <input type='text' className="search" placeholder='Search Name...' onChange={handleInputSearchText}></input>
                </div>

                <div className="blockSearch">
                    <h2>Max price</h2>
                    <input type='text' className="search" placeholder='Max price...' onChange={handleInputSearchMax}></input>
                </div>
                <div className="blockSearch">
                    <h2>Min price</h2>
                    <input type='text' className="search" placeholder='Min price...' onChange={handleInputSearchMin}></input>
                </div>
            </div>
        </div>
    )
};

export default Search;
