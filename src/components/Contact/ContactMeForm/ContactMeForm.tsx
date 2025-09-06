'use client';

import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

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
                            className={`border-gray h-10 rounded-lg border pl-3`}
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
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="telegram">
                                        Telegram
                                    </SelectItem>
                                    <SelectItem value="teams">
                                        MS Teams
                                    </SelectItem>
                                    <SelectItem value="slack">Slack</SelectItem>
                                    <SelectItem value="discord">
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
                        className={`border-gray h-10 rounded-lg border pl-3`}
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
                        className={`border-gray min-h-28 rounded-lg border p-3`}
                    ></Textarea>
                </div>
                <button className="w-fit rounded-lg bg-white px-6 py-2 font-bold text-black duration-200 not-disabled:cursor-pointer not-disabled:hover:scale-105 disabled:opacity-70">
                    Submit
                </button>
            </form>
        </div>
    );
}
