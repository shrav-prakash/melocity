import './forml.css'

function Field(props) {
    return (
        <div className="fu">
            {/* <p>{props.err?.[props.fieldname] && 'xyzzzz'}</p> */}
            <input
                type={props.fieldtype}
                placeholder={props.fieldname}
                {...props.reg(props.fieldname, { required: true })}
            />
        </div>
    )
}

export default Field;