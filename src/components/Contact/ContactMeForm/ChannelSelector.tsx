import { ContactChannel } from '@/schema/contact';

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

interface ChannelSelectorProps {
    value: ContactChannel;
    onValueChange: (value: string) => void;
}

export function ChannelSelector({
    value,
    onValueChange,
}: ChannelSelectorProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
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
    );
}
