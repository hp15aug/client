export default function FeaturedClients() {
    const clients = [
        {
            name: "AbbVie",
            logo: "./assets/clients/moa.jpg",
        },
        {
            name: "Pfizer",
            logo: "./assets/clients/surani.jpg",
        },
        {
            name: "Novartis", 
            logo: "./assets/clients/mouthcare.jpg",
        },
    ];

    return (
        <section className="bg-black text-gray-400 pb-16 px-4 md:px-6 lg:px-8">
            <div className="py-16 mx-auto max-w-screen-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl my-12 font-normal leading-tight tracking-tight text-gray-100 text-center">
                    Featured Clients
                </h2>

                <p className="text-lg md:text-2xl max-w-4xl mx-auto text-center leading-relaxed">
                    iL7 Studios believe in the power of exceptional design to elevate our clients' innovations, delivering solutions that not only captivate but also create lasting impact. By carefully nurturing ideas and executing them with precision, we ensure that every project exceeds expectations—strengthening brand presence, enhancing engagement, and driving real results. Our success is measured by the satisfaction and success of our clients.
                </p>
            </div>

            <div className="mx-auto bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-screen-xl">
                {clients.map((client) => (
                    <div
                        key={client.name}
                        className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <div className="relative w-full" style={{ paddingTop: '66.67%' }}>
                            {/* 3:2 aspect ratio */}
                            <img
                                src={client.logo || "/placeholder.svg"}
                                alt={`${client.name} logo`}
                                className="absolute top-0 left-0 w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
