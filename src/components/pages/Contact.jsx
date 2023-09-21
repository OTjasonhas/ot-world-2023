import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_m5xigsw",
            "template_391641s",
            form.current,
            "hT9CWwPA6pCy2UPgF"
        ).then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        }
        )
    }
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form ref={form} className="mb-0 space-y-6" onSubmit={sendEmail}>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 text-left">Email address</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></input>
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 text-left">First Name</label>
                        <div className="mt-1">
                            <input id="from_name" name="from_name" type="text" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></input>
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 text-left">Subject</label>
                        <div className="mt-1">
                            <input id="message" name="message" type="text" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></input>
                        </div>
                    </div>
                    <button className="rounded-none bg-green-200 h-16 w-16">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Contact