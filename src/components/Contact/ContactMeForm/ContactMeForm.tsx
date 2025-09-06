'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    ContactChannel,
    ContactSchema,
    type ContactFormData,
} from '@/schema/contact';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import {
    BanIcon,
    GmailIcon,
    TelegramIcon,
    MicrosoftTeamsIcon,
    SlackIcon,
    DiscordIcon,
} from '@/assets/icons';
import {
    getChannelAccountLabel,
    getChannelAccountPlaceholder,
} from '@/utils/contactForm';

const ICON_SIZE = 20;

export function ContactMeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
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

    const onSubmit = async (data: ContactFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        alert('Form data is correct!');
        reset();
    };

    const selectedChannel = watch('channel');

    const isSubmitDisabled =
        isSubmitting ||
        !!errors.root ||
        !!errors.name ||
        !!errors.channel ||
        !!errors.message ||
        (selectedChannel !== ContactChannel.NONE && !!errors.channelAccount);

    return (
        <div className="font-inter mx-auto w-full max-w-lg">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4"
            >
                <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="name" className="text-[15px]">
                            Name
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className={`${errors.name && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                            {...register('name')}
                        />
                        {errors.name && (
                            <span className="text-sm text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="channel" className="text-[15px]">
                            Conversation Channel
                        </label>
                        <Select
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
                        >
                            <SelectTrigger id="channel" className="w-full">
                                <SelectValue placeholder="Select a channel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Channels</SelectLabel>
                                    <SelectItem value={ContactChannel.NONE}>
                                        <BanIcon
                                            style={{
                                                width: ICON_SIZE,
                                                height: ICON_SIZE,
                                            }}
                                        />{' '}
                                        None
                                    </SelectItem>
                                    <SelectItem value={ContactChannel.EMAIL}>
                                        <GmailIcon /> Email
                                    </SelectItem>
                                    <SelectItem value="telegram">
                                        <TelegramIcon
                                            style={{
                                                width: ICON_SIZE,
                                                height: ICON_SIZE,
                                            }}
                                        />{' '}
                                        Telegram
                                    </SelectItem>
                                    <SelectItem value="teams">
                                        <MicrosoftTeamsIcon
                                            style={{
                                                width: ICON_SIZE,
                                                height: ICON_SIZE,
                                            }}
                                        />{' '}
                                        MS Teams
                                    </SelectItem>
                                    <SelectItem value="slack">
                                        <SlackIcon
                                            style={{
                                                width: ICON_SIZE,
                                                height: ICON_SIZE,
                                            }}
                                        />{' '}
                                        Slack
                                    </SelectItem>
                                    <SelectItem value="discord">
                                        <DiscordIcon
                                            style={{
                                                width: ICON_SIZE,
                                                height: ICON_SIZE,
                                            }}
                                        />{' '}
                                        Discord
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors.channel && (
                            <span className="text-sm text-red-500">
                                {errors.channel.message}
                            </span>
                        )}
                    </div>
                </div>

                {selectedChannel !== ContactChannel.NONE && (
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-[15px]">
                            {getChannelAccountLabel(selectedChannel)}
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={getChannelAccountPlaceholder(
                                selectedChannel
                            )}
                            className={`${errors.channelAccount && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                            {...register('channelAccount')}
                        />
                        {errors.channelAccount && (
                            <span className="text-sm text-red-500">
                                {errors.channelAccount.message}
                            </span>
                        )}
                    </div>
                )}

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-[15px]">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="How can I help ?"
                        className={`min-h-28 ${errors.message && 'focus-visible:ring-destructive/40 focus-visible:border-destructive/70'}`}
                        {...register('message')}
                    ></Textarea>
                    {errors.message && (
                        <span className="text-sm text-red-500">
                            {errors.message.message}
                        </span>
                    )}
                </div>
                {errors.root && (
                    <div className="text-red-500">{errors.root.message}</div>
                )}
                <button
                    disabled={isSubmitDisabled}
                    className="w-fit rounded-lg bg-white px-6 py-2 font-bold text-black duration-200 not-disabled:cursor-pointer not-disabled:hover:scale-105 disabled:opacity-70"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
