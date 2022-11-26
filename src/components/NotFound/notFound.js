import './notFound.css';

export default function NotFound() {
    return (
        <div className='body'>
            <div className='cont'>
                <span className='fof'>
                    Error encountered<br></br>
                </span>
                <span className='fofmsg'>
                    <div>Code: 404</div>
                    <div>Page not found</div>
                </span>
            </div>
        </div>
    );
}