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
    
    const isNameEmpty = name === ''
    const isEmailEmpty = email === ''
    const isMessageEmpty = message === ''

    const disableSubmit = isNameEmpty || isEmailEmpty || isMessageEmpty

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
        <div className='w-full px-6'>
            <form className='flex flex-col space-y-3 w-full' onSubmit={onSubmit}>
                <div className='font-semibold'>
                    Name:
                </div>
                <input 
                    className={(isNameEmpty ? 'border-gray-500' : 'border-purple') + ' bg-dark border-4 focus:border-white focus:border-opacity-100 outline-none p-2 rounded-lg'} 
                    type='text' 
                    value={name} 
                    onChange={onNameChange}
                    />
                <div className='font-semibold'>
                    Email:
                </div >
                <input type='text' value={email} onChange={onEmailChange}/>
                <div className='font-semibold'>
                    Message:
                </div>
                <textarea value={message} onChange={onMessageChange}/>
                <button disabled={disableSubmit} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ReachOut