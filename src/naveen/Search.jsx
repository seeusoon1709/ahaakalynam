import React from 'react'
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import useSearch from './useSearch';

const Search = () => {
    const { values, handleIdSearch, handleChange } = useSearch()
    return (
        <div className='basic'>
            <div className='top'>
                <div className='first'>
                    <h3>Basic search</h3>

                </div>
                <div className='second'>
                    <input type="text" name="profileId" value={values.profileId} onChange={handleChange} placeholder="Veiw by profile Id" />
                    <button onClick={handleIdSearch}><SearchIcon /></button>
                </div>
            </div>
            <div className='mid'>
                <table>
                    <tbody>
                        <tr>
                            <td>Age</td>
                            <td className='row'><input type="number" value={values.age} name="age" onChange={handleChange} placeholder="eg:23" /></td>
                        </tr>
                        <tr>
                            <td>Hight</td>
                            <td className='row'><input type="number" value={values.height} name="height" onChange={handleChange} placeholder="eg:180cm" /></td>
                        </tr>
                        <tr>
                            <td>Marital Status</td>
                            <td className='row'>
                                <select name="maritalStatus" onChange={handleChange}>
                                    <option >Select</option>
                                    <option value="Never married">Never married</option>
                                    <option value="awaiting Divorce">Awaiting Divorce</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="widower">widower</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Mother Tongue</td>
                            <td className='row'><input type="text" value={values.motherTongue} name="motherTongue" onChange={handleChange} placeholder="eg:tamil" /></td>
                        </tr>
                        <tr>
                            <td>Religion</td>
                            <td className='row'><input type="text" value={values.religion} name="religion" onChange={handleChange} placeholder="eg:Hindu" /></td>
                        </tr>
                        <tr>
                            <td>Education</td>
                            <td className='row'><input type="text" value={values.education} name="education" onChange={handleChange} placeholder="eg:B.E / Civil engineering" /></td>
                        </tr>
                        <tr>
                            <td>Country of living</td>
                            <td className='row'><input type="text" value={values.country} name="country" onChange={handleChange} placeholder="eg:India" /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='bottom'>
                <button><SearchIcon />search</button>
            </div>
        </div>
    )
}


export default Search