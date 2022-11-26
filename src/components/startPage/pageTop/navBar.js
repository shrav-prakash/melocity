import "./navBar.css";
import icon from '../../assets/favico.svg';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function PageTop(props) {
    const [prof, setprof] = useState('')
    const [search, setsearch] = useState('')
    const sinput = useRef(null)

    useEffect(() => {
        let url = "http://localhost:3001/auth/verify";
        let user = localStorage.getItem('tok')
        axios.post(url, {
            token: user
        }).then((res) => {
            console.log(res.data)
            if (res.data.error != undefined) {
                window.location = '/'
            } else {
                setprof(res.data.user)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const clearjwt = () => {
        localStorage.removeItem('tok')
        window.location = '/';
    }

    let songstr = [
        "Burn It All Down",
        "Elastic Heart",
        "Titanic Theme Song",
        "Until I Found You"
    ]
    const addSong = (event) => {
        event.preventDefault();
        let songname = event.target[0].value
        let songnam = songstr.findIndex(element => element.toLowerCase().includes(songname.toLowerCase()))
        props.getdata(songstr[songnam])
    }

    return (
        < div className="top" >
            <div className='heading'>
                <img src={icon} className='logo' /><a href="/main"><span className='melo'>Melocity</span></a>
            </div>
            <div className="search">
                <div className="mglass">
                    {props.sbar == 1 && <FontAwesomeIcon icon={faMagnifyingGlass} />}
                </div>
                <form onSubmit={addSong}>
                    {props.sbar == 1 && <input ref={sinput} className="sbar" onChange={(e) => setsearch(e.target.value)}></input>}
                </form>
                <a className="crs" onClick={() => {
                    setsearch('');
                    sinput.current.value = '';
                }}>
                    {search &&
                        <FontAwesomeIcon icon={faXmark} />
                    }
                </a>
            </div>
            <div className="prof">
                <div>
                    <a href='/profile'><FontAwesomeIcon icon={faUser} /> {prof}</a>
                </div>
                <button id="logout" onClick={clearjwt}><FontAwesomeIcon icon={faArrowRight} /> logout</button>
            </div>
        </div >
    );
}