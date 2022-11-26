import { react } from '@babel/types';
import './mainPage.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import { useLocation } from 'react-router';
const fileDownload = require('js-file-download');


function MainPage(props) {
    const [songName, setsongName] = useState('');
    const [songList, setsongList] = useState([]);
    const search = useLocation().search
    let songn = new URLSearchParams(search).get("song")
    if (songn && props.song.length == 0) {
        songn = songn
    } else {
        songn = ""
    }
    const addSong = (sname) => {
        let plist = window.prompt('Enter playlist name');
        axios.post('http://localhost:3001/playlist/addsong', {
            plist: plist,
            sname: props.song
        })
    }

    const downSong = () => {
        console.log(props.song)
        axios.get(`http://localhost:3001/song/download?sname=${props.song}`, {
            responseType: 'blob'
        })
            .then((res) => {
                let url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${props.song}.mp3`);
                document.body.appendChild(link);
                link.click();
            })
    }


    let url = ""
    if (props.song.length == 0) {
        url = `http://localhost:3001/song/stream?sname=${songn}`
    } else {
        url = `http://localhost:3001/song/stream?sname=${props.song}`
    }

    return (
        <div className='main'>
            <div className='mainsong'>
                <div className='mainsongimg'>
                    <img className='imgbig' src={require(`../../assets/${props.song || songn || "x"}.jpg`)} />
                    <div className='title'>
                        {props.song || songn}
                        <div className='tags'>
                            {/* <div>
                                moody
                            </div>
                            <div>
                                flute
                            </div> */}
                        </div>
                    </div>
                </div>
                <span className='downicon' onClick={downSong}><FontAwesomeIcon icon={faDownload} /></span>
                <span className='playicon2' onClick={addSong}><FontAwesomeIcon icon={faPlus} /></span>
                <span className='playicon' >
                    <ReactAudioPlayer
                        src={url}
                        autoPlay
                        controls
                    /></span>

            </div>
        </div>
    );
}

export default MainPage;  