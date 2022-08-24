import './forml.css'

function Field(props) {
    return (
        <div className="fu">
            <input type={props.fieldtype} placeholder={props.fieldname} />
        </div>
    )
}

export default Field;