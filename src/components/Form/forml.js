import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './forml.css';
import Field from './field'
import ico from '../assets/favico.svg';

function tab(sel, reg, errors) {
    if (sel == 0) {
        return (
            <div className='fields'>

                <Field fieldname="Username" fieldtype="text" reg={reg} err={errors} />
                <Field fieldname="Password" fieldtype="password" reg={reg} err={errors} />
            </div>
        )
    } else {
        return (
            <div className='fields'>
                <Field fieldname="Username" fieldtype="text" reg={reg} err={errors} />
                <Field fieldname="Email" fieldtype="email" reg={reg} err={errors} />
                <Field fieldname="Password" fieldtype="password" reg={reg} err={errors} />
                <Field fieldname="Reenter Password" fieldtype="password" reg={reg} err={errors} />
            </div>
        )
    }
}

function Forml() {

    if (localStorage.getItem('tok') != undefined && localStorage.getItem('tok') != '') {
        console.log(localStorage.getItem('tok'))
        window.location = '/main'
    }

    const [sel, setsel] = useState(1);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setdata] = useState({
        Username: "",
        Password: "",
        Email: ""
    });

    const onSubmit = data => {
        // console.log(data)
        setdata(data)
    }

    useEffect(() => {
        console.log(data)
        let url = '';
        if (sel == 0) {
            url = "http://localhost:3001/auth/login";
        } else {
            url = "http://localhost:3001/auth/register"
        }
        axios.post(url, {
            user: data.Username,
            pass: data.Password,
            email: data.Email
        }).then((res) => {
            if (res.data.token != undefined) {
                localStorage.setItem("tok", res.data.token);
                window.location = '/main'
            }
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [data])
    console.log(errors)

    return (
        <form className="bgbox" onSubmit={handleSubmit(onSubmit)} action="/">
            <div className='heading'>
                <img src={ico} className='logo' /><span className='melo'>Melocity</span>
            </div>
            <div className='selector'>
                <button className={sel == 0 ? 'sel' : ''} onClick={() => setsel(0)}>
                    SIGN IN
                </button>

                <button className={sel == 1 ? 'sel' : ''} onClick={() => setsel(1)}>
                    SIGN UP
                </button>
            </div>

            {tab(sel, register, errors)}
            <input type="submit" className='submit' />

            <span className='forgot'>Forgot Password...?</span>
        </form >
    )
}


export default Forml;