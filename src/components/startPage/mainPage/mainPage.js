import './mainPage.css'

export default function mainPage() {
    return (
        <div className='main'>
            <h1>Enter a song: </h1>
            <input type="text" placeholder="Song Name" />
            <button className='submitSong'>Submit</button>
        </div>
    );
}