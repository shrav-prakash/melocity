import './profilePage.css'
import PageTop from '../startPage/pageTop/navBar'
import axios from 'axios'
import { useState, useEffect } from 'react'

// function changeData() {

// }



export default function ProfilePage() {
    const [deets, setdeets] = useState({
        dob: "",
        phone: "",
        user: "",
        email: ""
    })

    useEffect(() => {
        console.log("effect ran")
        axios.post('http://localhost:3001/auth/details', {
            token: localStorage.getItem('tok')
        }).then((data) => {
            setdeets(data.data)
            console.log(deets)
            console.log(deets.dob)
        })
    }, [])

    const changeDate = (event) => {
        setdeets({ ...deets, dob: event.target.value })
        let date = event.target.value;
        axios.post('http://localhost:3001/auth/update', {
            token: localStorage.getItem('tok'),
            date: date
        }).then((data) => {
            console.log(deets)
        })
    }

    const changePhno = (event) => {
        setdeets({ ...deets, phone: event.target.value })
        let phno = event.target.value
        console.log(deets)
        if (phno.length == 10) {
            axios.post('http://localhost:3001/auth/upphone', {
                token: localStorage.getItem('tok'),
                phno: phno
            }).then((data) => {
                console.log(deets)
            })
        }
    }

    return (
        <div className="pfcont">
            <PageTop sbar={0} />
            <h1>Profile Details:</h1><br />
            <form action="#" method="post">
                <div className="pfinp">
                    <label name="uname">Username: </label>
                    <input type="text" id="uname" value={deets.user} disabled /><br />
                    <label name="email">Email ID: </label>
                    <input type="email" id="email" value={deets.email} disabled /><br />
                    <label name="number">Phone number: </label>
                    <input type="number" id="phone" onChange={changePhno} value={deets.phone} /><br />
                    <label name="uname">Date of Birth: </label>
                    <input type="date" id="dob" onChange={changeDate} value={String(deets.dob).split("T")[0]} /><br />
                </div>
            </form>
        </div>
    )
}