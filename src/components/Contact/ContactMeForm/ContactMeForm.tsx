'use client';

export function ContactMeForm() {
    return (
        <div className="mx-auto w-full max-w-lg">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full flex-col gap-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[15px]">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        aria-required
                        type="text"
                        placeholder="Enter Your Name"
                        className={`border-gray h-10 rounded-lg border pl-3`}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[15px]">
                        Email
                    </label>
                    <input
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
                    <textarea
                        name="message"
                        id="message"
                        required
                        aria-required
                        placeholder="How can I help ?"
                        className={`border-gray min-h-36 rounded-lg border p-3`}
                    ></textarea>
                </div>
                <button className="w-fit rounded-lg bg-white px-6 py-2 font-bold text-black duration-200 not-disabled:cursor-pointer not-disabled:hover:scale-105 disabled:opacity-70">
                    Submit
                </button>
            </form>
        </div>
    );
}
