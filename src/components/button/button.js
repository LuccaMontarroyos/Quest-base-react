import './button.css'
const Button = (props) => {
    return <button className="btn" 
    onClick={() => showButtonLabel(props.children)}>{props.children}</button>
}


const showButtonLabel = (label) => {
    alert(`The label of this button is '${label}'`)
}


export default Button