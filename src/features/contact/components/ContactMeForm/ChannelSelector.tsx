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

import { ContactChannel } from '$/contact/schemas/contact.schema';

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
                    <SelectItem value="telegram" disabled>
                        <TelegramIcon
                            style={{
                                width: ICON_SIZE,
                                height: ICON_SIZE,
                            }}
                        />{' '}
                        Telegram (WIP)
                    </SelectItem>
                    <SelectItem value="teams" disabled>
                        <MicrosoftTeamsIcon
                            style={{
                                width: ICON_SIZE,
                                height: ICON_SIZE,
                            }}
                        />{' '}
                        MS Teams (WIP)
                    </SelectItem>
                    <SelectItem value="slack" disabled>
                        <SlackIcon
                            style={{
                                width: ICON_SIZE,
                                height: ICON_SIZE,
                            }}
                        />{' '}
                        Slack (WIP)
                    </SelectItem>
                    <SelectItem value="discord" disabled>
                        <DiscordIcon
                            style={{
                                width: ICON_SIZE,
                                height: ICON_SIZE,
                            }}
                        />{' '}
                        Discord (WIP)
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
