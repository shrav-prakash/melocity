import NavBar from './pageTop/navBar';
import MainPage from './mainPage/mainPage';
import LeftTabs from './leftTabs/leftTabs';
import './startPage.css'
import { useState } from 'react';

export default function StartPage() {
    const [song, setsong] = useState("");

    const getdata = (data) => setsong(data);
    return (
        <div>
            <NavBar getdata={getdata} sbar={1} />
            <div className='pagediv'>
                <LeftTabs />
                <MainPage song={song} />
            </div>
        </div>
    );
}