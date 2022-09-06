import { react } from '@babel/types';
import './mainPage.css';
import { useState } from 'react';

function MainPage() {

    const clickHandler = (event) => {
        setsongList(songList => [...songList, songName]);
        document.getElementById('sx').value = "";
    }

    const [songName, setsongName] = useState('');
    const [songList, setsongList] = useState([]);

    return (
        <div className='main'>
            <h1>Enter a song: </h1>
            <input type="text" id="sx" onChange={(event) => setsongName(event.target.value)} />
            <button className='submitSong' onClick={clickHandler}>Submit</button>
            <h1>Downloaded songs:</h1>
            <ul>
                {songList.map(song => <li>{song}</li>)}
            </ul>
        </div>
    );
}

export default MainPage;  