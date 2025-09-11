'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { processContactForm } from '$/contact/server/submit';
import {
    ContactChannel,
    ContactSchema,
    type ContactFormData,
} from '$/contact/schemas/contact.schema';
import {
    getChannelAccountLabel,
    getChannelAccountPlaceholder,
    getSubmitButtonLabel,
} from '$/contact/utils';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { InputContainer } from './InputContainer';
import { ChannelSelector } from './ChannelSelector';

export function ContactMeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, touchedFields, dirtyFields },
        reset,
        watch,
        setValue,
        clearErrors,
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            channel: ContactChannel.NONE,
            name: '',
            channelAccount: undefined,
            message: '',
        },
    });

    const selectedChannel = watch('channel');
    const name = watch('name');

    const submitButtonLabel = getSubmitButtonLabel({
        channel: selectedChannel,
        name: name?.trim(),
        isNameTouched: touchedFields.name,
        isNameDirty: dirtyFields.name,
        isMessageTouched: touchedFields.message,
        isMessageDirty: dirtyFields.message,
    });

    const isSubmitDisabled =
        isSubmitting ||
        !!errors.root ||
        !!errors.name ||
        !!errors.channel ||
        !!errors.message ||
        (selectedChannel !== ContactChannel.NONE && !!errors.channelAccount);

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
                <div className="flex w-full gap-4">
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
                        inputId="channel"
                        label="Conversation Channel"
                        className="flex-1"
                        error={errors.channel?.message}
                    >
                        <ChannelSelector
                            value={selectedChannel || ContactChannel.NONE}
                            onValueChange={(value) => {
                                setValue('channel', value as ContactChannel);
                                if (value === ContactChannel.NONE) {
                                    clearErrors('name');
                                    setValue('channelAccount', undefined);
                                }
                                clearErrors('channelAccount');
                                clearErrors('root');
                            }}
                        />
                    </InputContainer>
                </div>

                {selectedChannel !== ContactChannel.NONE && (
                    <InputContainer
                        inputId="channelAccount"
                        label={getChannelAccountLabel(selectedChannel)}
                        error={errors.channelAccount?.message}
                    >
                        <Input
                            id="channelAccount"
                            type="text"
                            placeholder={getChannelAccountPlaceholder(
                                selectedChannel
                            )}
                            className={`${errors.channelAccount && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                            {...register('channelAccount')}
                        />
                    </InputContainer>
                )}

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

                {selectedChannel === ContactChannel.NONE && (
                    <div className="text-site-fg-6 text-sm">
                        <p>
                            Please select a conversation channel if you are
                            expecting replies from me.
                        </p>
                    </div>
                )}

                <button
                    disabled={isSubmitDisabled}
                    className="bg-gradient w-fit rounded-lg px-6 py-2 font-bold text-black duration-200 not-disabled:cursor-pointer not-disabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {submitButtonLabel}
                </button>
            </form>
        </div>
    );
}
