import { ComponentProps } from 'react';

import { Button } from '@/components/ui/button';

export function mdx_Button(props: ComponentProps<typeof Button>) {
    return <Button {...props} />;
}
