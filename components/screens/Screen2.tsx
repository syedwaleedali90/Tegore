import Image from "next/image";

export default function Screen2() {
    return (
        <section className="screen-section min-h-screen flex items-center justify-center">
            <div className="relative w-100 aspect-square">
                <Image
                    src="/Group8.svg"
                    alt="Tegore"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

        </section>
    );
}
