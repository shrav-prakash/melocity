import './songList.css'

export default function songList(props) {
    const songpage = (event) => {
        window.location = "/main?song=" + event.target.innerText
    }
    return (
        <div>
            <h3>Playlist: {props.pname}</h3>
            <ul className="pnamelist">
                {props.slist.map(data => (
                    <li className="psong" onClick={songpage}><img className='imgsmall' src={require(`../../assets/${data}.jpg`)} />{data}</li>
                ))}
            </ul>
        </div>
    )
}