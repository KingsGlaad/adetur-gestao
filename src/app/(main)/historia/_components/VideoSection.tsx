import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function VideoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="w-full rounded-lg overflow-hidden bg-white transform hover:scale-105">
        <LiteYouTubeEmbed id="FGgE2EP5XVc" title="Vídeo principal" />
      </div>
      <div className="w-full rounded-lg overflow-hidden bg-white transform hover:scale-105">
        <LiteYouTubeEmbed
          id="PLkwdlvplAx0LgesVrsz8hCt5kczGcdrwG"
          playlist
          title="Minha Playlist"
          thumbnail="/cmf/oficinas_Mogiana_Campinas.jpg"
        />
      </div>
    </div>
  );
}
