import { actions } from "astro:actions";
import { useState, type FormEventHandler, type InputHTMLAttributes } from "react";

const ContactForm = () => {

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { error, data } = await actions.getVisitorMessage(formData);
        
        if (error) { alert(error.message); return }
        alert(data.data);
    };

    return (
        <form  onSubmit={handleSubmit} method="POST" className="flex flex-col items-center gap-5">
            <div className="grid grid-cols-2 gap-5">

                <Input name="Name" />
                <Input name="Email" type="email" />

                <textarea name="Message" placeholder="Message" className=" col-span-2 outline-none bg-transparent rounded-md border-primary-500 border p-3"
                    required
                    onInvalid={(e) => e.currentTarget.setCustomValidity("What's the reason for contacting me? ⚡")}
                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                />
            </div>

            <button type="submit" className="flex font-medium gap-5 items-center border border-primary-500 hover:bg-primary-500 hover:text-primary-50 px-4 rounded-full transition">
                Send message
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.291 3.309a.75.75 0 0 0-.976.996l3.093 6.945H13a.75.75 0 0 1 0 1.5H5.408l-3.093 6.945a.75.75 0 0 0 .976.996l19-8a.75.75 0 0 0 0-1.382z" clipRule="evenodd" /></svg>            </button>
        </form>
    )
}


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input = ({ name, ...props }: Props) => {


    return (

        <div className="relative">
            <input
                name={name}
                id={"input-" + name}
                className="placeholder-opacity-0 py-1 w-full peer outline-none bg-primary-500/20 text-inherit pl-3 rounded-full"
                placeholder=" "
                autoComplete="off"
                {...props}
            />
            <label htmlFor={"input-" + name} className="peer py-1 absolute top-0 left-0 -translate-y-3/4 text-xs text-opacity-50 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base transition pl-4 ">{name}</label>
        </div>
    )
}
export default ContactForm