interface InputContainerProps {
    inputId: string;
    label: string;
    children: React.ReactNode;
    className?: string;
    error?: string;
}

export function InputContainer({
    inputId,
    label,
    children,
    className,
    error,
}: InputContainerProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor={inputId} className="text-[15px]">
                {label}
            </label>
            {children}
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
}
