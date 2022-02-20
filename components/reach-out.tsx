const ReachOut = () => {
    const onClick = () => {
        fetch('/api/hello')
    }
    return (
        <div onClick={onClick}>
            reach out
        </div>
    )
}

export default ReachOut