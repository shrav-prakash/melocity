import './forml.css'

function Field(props) {
    return (
        <div className="fu">
            <p id="err">{props.err?.[props.fieldname] && 'Please match the required format'}</p>
            <input
                type={props.fieldtype}
                placeholder={props.fieldname}
                {...props.reg(props.fieldname, { required: true })}
            />
        </div>
    )
}

export default Field;