interface ContactEmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function ContactEmailTemplate({
    name,
    email,
    message,
}: ContactEmailTemplateProps) {
    return (
        <html>
            <body
                style={{
                    margin: 0,
                    background: '#f6f8fb',
                    fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial",
                }}
            >
                <div
                    style={{
                        maxWidth: 640,
                        margin: '24px auto',
                        padding: 20,
                        background: '#fff',
                        borderRadius: 12,
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: 18 }}>
                        Thanks — your message has been received
                    </h2>
                    <p style={{ color: '#6b7280', marginTop: 8 }}>
                        This is an automatic confirmation from{' '}
                        <strong>dhruvdhaduk.tech</strong>.
                    </p>

                    <p style={{ fontSize: 13, color: '#374151' }}>
                        <strong>From:</strong> {name} &lt;{email}&gt;
                        <br />
                        <strong>Subject:</strong> Contact dhruvdhaduk.tech |{' '}
                        {name}
                    </p>

                    <div style={{ marginTop: 8 }}>
                        <p>Hi {name},</p>
                        <p>
                            Thanks — I received your message on
                            dhruvdhaduk.tech. Below is a copy of what you sent:
                        </p>

                        <div
                            style={{
                                background: '#f9fafb',
                                padding: 14,
                                borderRadius: 8,
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {message}
                        </div>

                        <p style={{ marginTop: 12 }}>
                            I will read this and reply to you personally from my
                            main email address:{' '}
                            <strong>dhadukd44@gmail.com</strong>.
                        </p>

                        <p style={{ color: '#6b7280', fontSize: 13 }}>
                            <strong>
                                Please do NOT reply to this confirmation email.
                            </strong>{' '}
                            If you reply here it may not reach me. Wait for my
                            personal reply from dhadukd44@gmail.com.
                        </p>

                        <p style={{ fontWeight: 600 }}>— Dhruv</p>
                    </div>
                </div>
            </body>
        </html>
    );
}
