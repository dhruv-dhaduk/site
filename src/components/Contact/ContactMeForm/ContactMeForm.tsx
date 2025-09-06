'use client';

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

const ICON_SIZE = 20;

export function ContactMeForm() {
    return (
        <div className="font-inter mx-auto w-full max-w-lg">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full flex-col gap-4"
            >
                <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="name" className="text-[15px]">
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            required
                            aria-required
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="name" className="text-[15px]">
                            Conversation Channel
                        </label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a channel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Channels</SelectLabel>
                                    <SelectItem value="none">
                                        <BanIcon
                                            style={{
                                                width: ICON_SIZE,
                                                height: ICON_SIZE,
                                            }}
                                        />{' '}
                                        None
                                    </SelectItem>
                                    <SelectItem value="email">
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
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[15px]">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        required
                        aria-required
                        type="email"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-[15px]">
                        Message
                    </label>
                    <Textarea
                        name="message"
                        id="message"
                        required
                        aria-required
                        placeholder="How can I help ?"
                        className={`min-h-28`}
                    ></Textarea>
                </div>
                <button className="w-fit rounded-lg bg-white px-6 py-2 font-bold text-black duration-200 not-disabled:cursor-pointer not-disabled:hover:scale-105 disabled:opacity-70">
                    Submit
                </button>
            </form>
        </div>
    );
}
