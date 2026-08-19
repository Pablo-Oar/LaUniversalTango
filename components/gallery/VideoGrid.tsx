import { GALLERY_VIDEOS } from "@/data/gallery"
import { withBasePath } from "@/lib/basePath"

export default function VideoGrid() {
  if (GALLERY_VIDEOS.length === 0) {
    return <p style={{ color: "#D5D9F0" }}>Próximamente: videos de presentaciones.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {GALLERY_VIDEOS.map((video) => (
        <div key={video.id} id={`video-${video.id}`} className="scroll-mt-[90px]">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4" style={{ backgroundColor: "#1C2D78" }}>
            {video.localSrc ? (
              <video
                controls
                poster={video.poster ? withBasePath(video.poster) : undefined}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={withBasePath(video.localSrc)} type="video/mp4" />
              </video>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <h3 className="h3-display text-lg mb-1">{video.title}</h3>
          <p className="text-sm" style={{ color: "#D5D9F0" }}>{video.description}</p>
        </div>
      ))}
    </div>
  )
}
