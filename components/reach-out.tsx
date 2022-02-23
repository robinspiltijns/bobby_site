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
            <form className='flex flex-col w-full' onSubmit={onSubmit}>
                <h2 className='text-5xl font-semibold mb-6'>Interested? Say hi!</h2>
                <div className='font-semibold mb-2'>
                    Name:
                </div>
                <input 
                    className={(isNameEmpty ? 'border-gray-500' : 'border-purple') + ' mb-4 bg-dark border-4 focus:border-white focus:border-opacity-100 outline-none p-2 rounded-lg'} 
                    type='text' 
                    value={name} 
                    onChange={onNameChange}
                />
                <div className='font-semibold mb-2'>
                    Email:
                </div >
                <input 
                    className={(isEmailEmpty ? 'border-gray-500' : 'border-orange') + ' mb-4 bg-dark border-4 focus:border-white focus:border-opacity-100 outline-none p-2 rounded-lg'} 
                    type='text' 
                    value={email} 
                    onChange={onEmailChange}
                />
                <div className='font-semibold mb-2'>
                    Message:
                </div>
                <textarea 
                    className={(isMessageEmpty ? 'border-gray-500' : 'border-blue') + ' mb-6 bg-dark border-4 focus:border-white focus:border-opacity-100 outline-none p-2 rounded-lg'} 
                    value={message} 
                    onChange={onMessageChange}
                />
                <button className={(disableSubmit ? 'bg-gray-500' : 'bg-blue') + ' px-6 py-3 rounded-xl font-semibold mb-2'} disabled={disableSubmit} type='submit'>Let&apos;s chat!</button>
                <p className='font-light text-gray-200'>Or mail robinspiltijns@bobby.com</p>
            </form>
        </div>
    )
}

export default ReachOut