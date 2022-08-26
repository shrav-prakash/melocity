import "./navBar.css";
import icon from '../../assets/favico.svg';

export default function pageTop() {
    return (
        <div className="top">
            <div className='heading'>
                <img src={icon} className='logo' /><span className='melo'>Melocity</span>
            </div>
        </div>
    );
}