import Image from "next/image";

export default function Screen3() {
    return (
        <section className="screen-section min-h-screen flex items-center justify-center">
            <div className="relative w-100 aspect-square">
                <Image
                    src="/Group7.svg"
                    alt="Tegore mascot"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    );
}
