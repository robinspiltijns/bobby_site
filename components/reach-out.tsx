import sgMail, { MailDataRequired } from '@sendgrid/mail'

const ReachOut = () => {
    const onClick = async () => {
        const res = await fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify({
                email: 'spiltijnsrobin@gmail.com',
                message: 'This is a test message sent from the frontend.'
            })
        })
    }
    return (
        <div onClick={onClick}>
            reach out
        </div>
    )
}

export default ReachOut