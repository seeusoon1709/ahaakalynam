import React from 'react'
import { useState } from 'react'

const useForm = () => {
    // let status = 0
    // let mandatory = ""
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        question: "",
        option: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prevalues) => {
            return {
                ...prevalues, [name]: value
            }
        })

    }

    const validation = () => {
        let error={}
        // alert("derftyg")
        //username validation
        if (values.userName === null || values.userName === "") {
            error.mandatory ="* marked fields are mandatory"
        }else if (!/^[a-zA-Z][a-zA-Z_0-9]{4,10}$/.test(values.userName)) {
            error.userName="Enter charater from 4to 10."
            error.mandatory =""
        }else {
            error.mandatory =""
            error.status = 1
        }
        
        //mobileNumber validation
        if (values.phoneNumber === "") {
            error.mandatory ="* marked fields are mandatory"
        }else if (values.phoneNumber.length != 10) {
            error.mandatory =""
            error.phoneNumber="Invalid number"
        } else {
            error.status += "1"
            error.mandatory =""
        }
        //email validation
        if (values.email === "") {
            error.mandatory ="* marked fields are mandatory"
        }else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
            error.email="Enter valid email"
            error.mandatory =""
        } else {
            error.status += "1"
            error.mandatory =""
        }
        //subject validation
        if (values.subject === "") {
            error.mandatory ="* marked fields are mandatory"
        } else if(values.subject.length<=5){
            error.mandatory =""
            error.subject="Enter more than 5 characters"
        }else {
            error.mandatory =""
            error.status += "1"
        }
        //question validation
        if (values.question === "") {
            error.mandatory ="* marked fields are mandatory"
        }
        else if(values.question.length<=100){
            error.question="Enter atleast 100 characters"
            error.mandatory =""
        } else {
            error.status += "1"
            error.mandatory =""
        }
        return(
            {error}
        )
    }

    // const qwe= validation();
    const clear = () => {
        setValues((preValues) => {
            return {
                ...preValues,
                userName: "",
                phoneNumber: "",
                email: "",
                subject: "",
                question: "",
                option: ""
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const qwe= validation(); 
        setErrors({...qwe.error})
        console.log(values)
    }
    return (
    {handleSubmit, handleChange, values, errors}
  )
}

export default useForm