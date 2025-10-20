'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { processContactForm } from '$/contact/server/submit';
import {
    ContactSchema,
    type ContactFormData,
} from '$/contact/schemas/contact.schema';

import { InputContainer } from './InputContainer';

export function ContactMeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const isSubmitDisabled =
        isSubmitting ||
        !!errors.root ||
        !!errors.name ||
        !!errors.email ||
        !!errors.message;

    const onSubmit = async (data: ContactFormData) => {
        const promise = processContactForm(data);
        toast.promise(promise, {
            loading: 'Sending the message...',
            success: ({ message }) => message,
            error: (err) =>
                err.message || 'An error occured while sending the message.',
        });
        try {
            await promise;
            reset();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="font-inter mx-auto w-full max-w-lg">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4"
            >
                <InputContainer
                    inputId="name"
                    label="Name"
                    className="flex-1"
                    error={errors.name?.message}
                >
                    <Input
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className={`${errors.name && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                        {...register('name')}
                    />
                </InputContainer>

                <InputContainer
                    inputId="email"
                    label="Email"
                    error={errors.email?.message}
                >
                    <Input
                        id="email"
                        type="text"
                        placeholder={'Enter Your Email'}
                        className={`${errors.email && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                        {...register('email')}
                    />
                </InputContainer>

                <InputContainer
                    inputId="message"
                    label="Message"
                    error={errors.message?.message}
                >
                    <Textarea
                        id="message"
                        placeholder="How can I help ?"
                        className={`min-h-28 ${errors.message && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                        {...register('message')}
                    ></Textarea>
                </InputContainer>

                {errors.root && (
                    <div className="text-red-500">{errors.root.message}</div>
                )}

                <button
                    disabled={isSubmitDisabled}
                    className="bg-gradient w-fit rounded-lg px-6 py-2 font-bold text-black duration-200 not-disabled:cursor-pointer not-disabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
