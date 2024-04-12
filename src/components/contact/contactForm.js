'use client'
import InputLabel from "../atoms/label";
import InputField from "../atoms/input";
import { useForm } from "react-hook-form";

const ContactForm = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const formDataSubmit = data => {
        console.log('data on the form: ', data);

        return alert(`Hello ${data.name}`)
    }

    return (
        <form className='flex flex-col gap-5 card-body' onSubmit={handleSubmit(formDataSubmit)}>
            <div className="form-control">
                <InputLabel label="Name" />
                <InputField type='text' register={register} errors={errors} placeholder='Your name...' name='name' />
            </div>
            <div className="form-control">
                <InputLabel label='Email' />
                <InputField register={register} errors={errors} name='email' type='email' options={{ required: true }} placeholder='yourname@provider.com' />
            </div>
            <div className="form-control">
                <InputLabel label='Message' />
                <textarea className="textarea textarea-bordered" {...register('message', { required: true })} placeholder="Write your thoughts..." cols="30" rows="5"></textarea>
                {errors?.message && <p className='text-error pt-2'>Message is required.</p>}
            </div>
            <div className='flex justify-end'>
                <button className='btn' type='submit'>Submit now</button>
            </div>
        </form>
    );
};

export default ContactForm;