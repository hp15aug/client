import { useState } from "react"
import { VIDEOS, EXPANDED_VIDEO_SIZE } from "./galleryconsant"
import { Play } from "lucide-react"

const Dialog = ({ open, onOpenChange, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black/50"
                onClick={() => onOpenChange(false)}
            />
            <div className="relative z-50">
                {children}
            </div>
        </div>
    );
};

const DialogContent = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
        {children}
    </div>
);

const VideoGrid = () => {
    const [expandedVideo, setExpandedVideo] = useState(null);

    return (
        <div className="w-full my-[8%] mb-[10%] flex px-[4%] items-center justify-center flex-col">

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIDEOS.map((video) => (
                    <div
                        key={video.id}
                        className="relative aspect-video cursor-pointer group"
                        onClick={() => setExpandedVideo(video.id)}
                    >
                        {/* Thumbnail */}
                        <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/30 p-3 rounded-full group-hover:bg-black/50 transition-colors">
                                <Play className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-white text-sm">{video.title}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Expanded Video Dialog */}
            <Dialog open={expandedVideo !== null} onOpenChange={() => setExpandedVideo(null)}>
                <DialogContent className="max-w-[1200px] p-0">
                    {expandedVideo && (
                        <div
                            style={{
                                width: EXPANDED_VIDEO_SIZE.width,
                                height: EXPANDED_VIDEO_SIZE.height,
                            }}
                            className="relative"
                        >
                            <video
                                src={VIDEOS.find((v) => v.id === expandedVideo)?.url}
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default VideoGrid;