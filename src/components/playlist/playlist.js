import React, { useEffect } from 'react';
import PageTop from '../startPage/pageTop/navBar';
import './playlist.css';
import SongList from './songList/songList';
import { useState } from "react";
import { useLocation } from 'react-router';
import axios from 'axios';



export default function Playlist() {
    const [slist, setslist] = useState([])
    const search = useLocation().search
    const pname = new URLSearchParams(search).get("playlist")

    useEffect(() => {
        axios.post('http://localhost:3001/playlist/getsongs', {
            token: localStorage.getItem('tok'),
            plist: pname
        }).then((data) => {
            setslist(data.data.slist)
        })
    }, []);
    return (
        < div className='contcont'>
            <PageTop sbar={0} />
            <div className='plcont'>
                <SongList pname={pname} slist={slist} />
            </div>
        </div >
    )
}
