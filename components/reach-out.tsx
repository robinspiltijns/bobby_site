const ReachOut = () => {
    const onClick = () => {
        const res = fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify({
                emailAdress: "test@test.test",
                message: 'This is a test email.'
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