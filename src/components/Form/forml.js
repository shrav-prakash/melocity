import { useState } from 'react';
import './forml.css'
import Field from './field'
import ico from '../assets/favico.svg';

function tab(sel) {
    if (sel == 0) {
        return (
            <div className='fields'>
                <Field fieldname="Username" fieldtype="text" />
                <Field fieldname="Password" fieldtype="password" />
            </div>
        )
    } else {
        return (
            <div className='fields'>
                <Field fieldname="Username" fieldtype="text" />
                <Field fieldname="Email" fieldtype="email" />
                <Field fieldname="Password" fieldtype="password" />
                <Field fieldname="Reenter Password" fieldtype="password" />
            </div>
        )
    }
}

function Forml() {

    const [sel, setsel] = useState(1);

    return (
        <div className="bgbox">
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

            {tab(sel)}

            <button className='submit'>Submit</button>

            <span className='forgot'>Forgot Password...?</span>
        </div >
    )
}


export default Forml;