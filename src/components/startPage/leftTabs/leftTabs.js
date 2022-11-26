import { react } from '@babel/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './leftTabs.css'
import { faHeart, faHome, faThumbsUp, faTags } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function LeftTabs() {
    const [plists, setplists] = useState([])
    const [pchange, setPchange] = useState(0)
    useEffect(() => {
        axios.post('http://localhost:3001/playlist/get', {
            token: localStorage.getItem('tok')
        }).then((data) => {
            setplists(data.data)
        })
    }, [pchange])

    const plistdata = () => {
        return plists.map((ele) => {
            <li>{ele}</li>
        })
    }

    const addplist = () => {
        let pname = prompt("Enter playlist name");
        if (pname == null) {
            return;
        }
        axios.post('http://localhost:3001/playlist/create', {
            token: localStorage.getItem('tok'),
            pname: pname
        }).then((data) => {
            setPchange(pchange + 1)
        })
    }


    const url = (x) => { return "/playlist?playlist=" + x }
    return (
        <div className='lefttabs'>
            <ul className='tabs'>
                <li><FontAwesomeIcon icon={faHome} /> Home</li>
                <li><FontAwesomeIcon icon={faHeart} /> Liked Songs</li>
                <li><FontAwesomeIcon icon={faThumbsUp} /> Recommendations</li>
            </ul>
            <div className='line'></div>
            <ul className='plists'>
                {plists.map(data => (
                    <li style={{ cursor: 'pointer' }} onClick={() => window.location = url(data)}>{data}</li>
                ))}
                <li style={{ cursor: 'pointer' }} onClick={addplist}><u>+ Add Playlist</u></li>
            </ul>
        </div >
    );
}

