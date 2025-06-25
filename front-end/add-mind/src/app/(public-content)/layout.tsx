
export const metadata = {
    title: "AddMind Public",
    description: "Публічна частина сайту",
};

export default function PublickContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
