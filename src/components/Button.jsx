const Button = ({ children, tw, ...rest }) => {
    return (
        <button {...rest} className={`px-5 border-2 py-2 rounded-xl shadow-md text-xs cursor-pointer hover:brightness-50 bg-gray-800 ${tw}`}>
            {children}
        </button>
    )
}

export default Button