/* eslint-disable @next/next/no-img-element */
import { JavaScriptIcon, TypeScriptIcon } from '@/assets/icons';

import type { SnippetLanguage } from './languages';
import { getLanguageLabel } from './utils';

interface LanguageLabelProps {
    language: SnippetLanguage;
}

const ICON_SIZE = 18;

export function LanguageLabel({ language }: LanguageLabelProps) {
    let icon = null;

    switch (language) {
        case 'javascript':
            icon = (
                <JavaScriptIcon
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                />
            );
            break;
        case 'typescript':
            icon = (
                <TypeScriptIcon
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                />
            );
            break;
        case 'bash':
            icon = (
                <img
                    src="/icons/bash.svg"
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                    role="presentation"
                    draggable={false}
                    contextMenu=""
                    alt=""
                    className="select-none"
                />
            );
            break;
    }

    return (
        <div className="flex items-center justify-center gap-2">
            {icon}
            <span className="text-sm">{getLanguageLabel(language)}</span>
        </div>
    );
}
