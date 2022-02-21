import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { ChangeEvent, FormEvent, useState } from 'react'

const ReachOut = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }
    
    const disableSubmit = name === '' || email === '' || message === ''

    const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message,
                })
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type='text' value={name} onChange={onNameChange}/>
                </label>
                <label>
                    Email:
                    <input type='text' value={email} onChange={onEmailChange}/>
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={onMessageChange}/>
                </label>
                <button disabled={disableSubmit} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ReachOut