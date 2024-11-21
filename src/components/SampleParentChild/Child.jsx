const Child = ({ num, setNum }) => {
    return (
        <div>
            <h2 className="text-xl m-5">Child</h2>

            <button onClick={() => setNum(num + 1)} >+</button>

            <span className="text-red-600">{num}</span>

        </div>
    )
}

export default Child