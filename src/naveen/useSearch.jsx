import React, { useState } from 'react'

const useSearch = () => {
    const [values, setValues] = useState({
        profileId:"",
        age: "",
        height: "",
        maritalStatus: "",
        motherTongue:"",
        religion:"",
        education:"",
        country:""
    })

    const handleIdSearch=()=>{

    }

    const handleChange=(e)=>{
        const{name, value}=e.target
        setValues((preValues)=>{
            return({
                ...preValues,[name]:value
            })
        })
    }
    console.log(values);
  return (
    {values, handleIdSearch, handleChange}
  )
}

export default useSearch