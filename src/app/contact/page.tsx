import { ContactMeForm } from '@/features/contact';

export const revalidate = false;

export default function Contact() {
    return (
        <main className="font-plex flex flex-col gap-12 px-6 py-16">
            <h1 className="font-inter flex items-end justify-center gap-4 overflow-visible text-4xl font-bold sm:text-[44px]">
                <span className="text-gradient">Contact Me</span>
            </h1>
            <ContactMeForm />
        </main>
    );
}
