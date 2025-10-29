import type { ComponentProps } from 'react';

import { Button } from '@/components/ui/button';

export async function Btn(props: ComponentProps<typeof Button>) {
    return <Button {...props} />;
}
