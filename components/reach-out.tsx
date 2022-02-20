const ReachOut = () => {
    const onClick = async () => {
        const res = await fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify({
                email: 'test@test.test',
                message: 'This is a test message'
            })
        })
        console.log(res);
    }

    return (
        <div onClick={onClick}>
            reach out
        </div>
    )
}

export default ReachOut