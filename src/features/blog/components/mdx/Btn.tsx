import { ComponentProps } from 'react';

import { Button } from '@/components/ui/button';

export function Btn(props: ComponentProps<typeof Button>) {
    return <Button {...props} />;
}
