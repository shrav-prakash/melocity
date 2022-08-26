import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './forml.css'
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

    const [sel, setsel] = useState(1);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data)
    console.log(errors)

    return (
        <form className="bgbox" onSubmit={handleSubmit(onSubmit)}>
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