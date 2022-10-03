import { TextInput, Textarea, Checkbox, Button, Group, Box, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import type { NextPage } from 'next';
import { useState } from 'react';
import { toast, TypeOptions, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Onboarding: NextPage = () => {
    const submitForm = useForm({
        initialValues: {
            email: '',
            full_name: '',
            business: '',
            consulting: false,
            building: false,
            auditing: false,
            message: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });


    const [formSubmitted, setForm] = useState(false);

    const handleSubmit = async (values : any) => {
        setForm(true);
        toast.success('Form Submitted Sucessfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        const request = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify(values)
        });
        const result = await request.json();
        console.log(result);
    }


    return (
        <div className='flex items-center justify-center h-screen w-screen bg-center bg-gradient-to-r from-cyan-300 to-blue-300'>
            <h1 className='fixed top-20 font-extrabold underline decoration-double underline-offset-8 text-xl 2xl:text-4xl'> Client Onboarding Form </h1>
            <Box sx={{ height: 500, fontWeight: 600 }} mx="auto">
                <form onSubmit={submitForm.onSubmit((values : any )=> handleSubmit(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        size="xs"
                        {...submitForm.getInputProps('email')}
                    />
                    <Space h="md" />
                    <TextInput
                        withAsterisk
                        label="Full Name"
                        placeholder="John Doe"
                        size="xs"
                        {...submitForm.getInputProps('full_name')}
                    />
                    <Space h="md" />
                    <TextInput
                        withAsterisk
                        label="Business"
                        placeholder="Your Business Name"
                        size="xs"
                        {...submitForm.getInputProps('business')}
                    />
                    <Space h="md" />
                    <Checkbox checked={false} label="Consulting"
                        {...submitForm.getInputProps('consulting', { type: 'checkbox' })}
                    />
                    <Space h="md" />

                    <Checkbox checked={false} label="Building"
                        {...submitForm.getInputProps('building', { type: 'checkbox' })}
                    />
                    <Space h="md" />

                    <Checkbox checked={false} label="Auditing"
                        {...submitForm.getInputProps('auditing', { type: 'checkbox' })}
                    />
                    <Space h="md" />
                    <Textarea
                        withAsterisk
                        label="How are you interested in using our services?"
                        placeholder=" "
                        padding="100px"
                        size="xs"
                        {...submitForm.getInputProps('message')}
                    />

                    <Group position="right" mt="md">
                        <Button className="bg-black" type="submit" disabled={formSubmitted} >Submit</Button>
                    </Group>
                    <ToastContainer/>
                </form>
            </Box>

        </div>
    );
}

export default Onboarding

