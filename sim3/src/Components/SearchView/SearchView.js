import React, { Component } from 'react';
import './SearchView.css';
import Navbar from '../Navbar/Navbar'

class SearchView extends Component {
    render() {
        return (
            <div >
                 <Navbar page='Search'/>
                <div className='searchView'>
               
                <div className='searchContainer'>
                    <div className='searchTop'>
                        <select name="" id="">
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                        </select>
                        <input className='searchBox'type="text"/>
                        <div className='searchButton' onClick={()=>alert('ayeee work on this')}>Search</div>
                        <div className='resetButton'onClick={()=>alert('ayeee work on this ')}>Reset</div>

                    </div>
                    <div className='searchBottom'>

                    </div>

                </div>
                </div>
            </div>
        );
    }
}

export default SearchView;