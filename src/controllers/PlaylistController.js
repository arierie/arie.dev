import PlaylistView from '../views/PlaylistView'

const PlaylistController = () => {
    return (
        <PlaylistView>
            <btn-playlist-me onClick={() => {
                window.open("https://playlist-me-client.vercel.app/", "_blank");
            }}/>
        </PlaylistView>
    )
}

export default PlaylistController
