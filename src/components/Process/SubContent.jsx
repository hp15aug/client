function SubContent({ title, content, client }) {
    return (
        // Full-width white background container
        <div className="w-full px-6 pt-16 ">
            {/* Center content in a max-width container */}
            <div className="max-w-7xl mx-auto">

                {/* Section-I */}
                <div className="bg-black text-white min-h-screen flex items-center mx-40">
                    <div className="w-[95%] text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mt-2 w-full autoShow">
                            {title}
                        </h1>
                        <p className="text-gray-400 mt-12 text-xl leading-relaxed autoShow">
                            {content}
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default SubContent;
