import FooterCard from "@/components/cards/FooterCard/FooterCard";
import { footerMenuItems } from "@/data/footerData";
import Image from "next/image";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <section className="h-screen w-screen min-h-[900px] overflow-y-scroll overflow-x-hidden md:overflow-hidden">
            <main className="flex h-[90%] w-full flex-col md:flex-row justify-center items-center">
                <div className="h-full hidden md:w-1/2 md:flex justify-end items-center p-8">
                    <Image src="/static/assets/login/image.png" width={400} height={400} alt="image" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center
        md:items-start
         md:justify-start
          gap-2">
                    {children}
                </div>
            </main>
            <main className="p-10 py-4 gap-4 w-full flex flex-wrap items-center justify-center">
                {footerMenuItems.map((item, index) => { return <FooterCard title={item.text} key={index} /> })}
            </main>
        </section>
    )
}

export default AuthLayout