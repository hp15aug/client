import { useEffect, useRef, useState } from "react"

const SmallVideo = ({ url, title }) => {
    const videoRef = useRef(null)
    const progressRef = useRef(null)
    const volumeRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const updateTime = () => setCurrentTime(video.currentTime)
        const updateDuration = () => setDuration(video.duration)

        video.addEventListener("timeupdate", updateTime)
        video.addEventListener("loadedmetadata", updateDuration)

        const handleKeyPress = (e) => {
            if (e.code === "Space") {
                e.preventDefault()
                togglePlay()
            }
            switch (e.key.toLowerCase()) {
                case "m":
                    toggleMute()
                    break
                case "arrowleft":
                    skip(-10)
                    break
                case "arrowright":
                    skip(10)
                    break
                case "arrowup":
                    adjustVolume(0.1)
                    break
                case "arrowdown":
                    adjustVolume(-0.1)
                    break
                case "f":
                    toggleFullscreen()
                    break
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return () => {
            video.removeEventListener("timeupdate", updateTime)
            video.removeEventListener("loadedmetadata", updateDuration)
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const skip = (seconds) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds
        }
    }

    const adjustVolume = (change) => {
        if (videoRef.current) {
            const newVolume = Math.max(0, Math.min(1, volume + change))
            videoRef.current.volume = newVolume
            setVolume(newVolume)
        }
    }

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            videoRef.current?.parentElement?.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    const handleProgressChange = (e) => {
        const progressBar = progressRef.current
        const video = videoRef.current
        if (progressBar && video) {
            const position = (e.pageX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth
            const newTime = position * video.duration
            video.currentTime = newTime
        }
    }

    const handleVolumeChange = (e) => {
        const volumeBar = volumeRef.current
        if (volumeBar && videoRef.current) {
            const rect = volumeBar.getBoundingClientRect()
            const position = (e.pageX - rect.left) / volumeBar.offsetWidth
            const newVolume = Math.max(0, Math.min(1, position))
            videoRef.current.volume = newVolume
            setVolume(newVolume)
            setIsMuted(newVolume === 0)
        }
    }

    return (
        <section className=" bg-white pt-16 pb-32">
            <h1 className="text-6xl mb-36 font-bold text-center mt-10 text-black">{title}</h1>
        <div className="relative w-[1388px] h-[744px] flex items-center ml-[12%] bg-black rounded-xl overflow-hidden">
            <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                src={url}
                onClick={togglePlay}
                onTouchEnd={(e) => {
                    e.preventDefault()
                    togglePlay()
                }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="space-y-4">
                    {/* Custom Progress Bar */}
                    <div
                        ref={progressRef}
                        className="w-full h-1 bg-white/30 cursor-pointer rounded-full overflow-hidden"
                        onClick={handleProgressChange}
                    >
                        <div
                            className="h-full bg-white transition-all"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                    </div>

                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="p-2 hover:bg-white/20 rounded-full transition"
                            >
                                {isPlaying ? (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>

                            {/* Skip Backward */}
                            <button
                                onClick={() => skip(-10)}
                                className="p-2 hover:bg-white/20 rounded-full transition"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                                </svg>
                            </button>

                            {/* Skip Forward */}
                            <button
                                onClick={() => skip(10)}
                                className="p-2 hover:bg-white/20 rounded-full transition"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z" />
                                </svg>
                            </button>

                            {/* Volume Control */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleMute}
                                    className="p-2 hover:bg-white/20 rounded-full transition"
                                >
                                    {isMuted ? (
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        </svg>
                                    )}
                                </button>
                                <div
                                    ref={volumeRef}
                                    className="w-24 h-1 bg-white/30 cursor-pointer rounded-full overflow-hidden"
                                    onClick={handleVolumeChange}
                                >
                                    <div
                                        className="h-full bg-white transition-all"
                                        style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Time Display */}
                            <span className="text-sm">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>

                        {/* Fullscreen Button */}
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 hover:bg-white/20 rounded-full transition"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default SmallVideo