
const TextChange = ({textColor, children}) => {
    return (
        <div>
            <p style={{color: textColor}}>{children.toUpperCase()}</p>
        </div>
    )
}

TextChange.defaultProps = {
    textColor: 'green'
}

export default TextChange
