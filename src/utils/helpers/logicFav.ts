const isFavorite = (arrayFavorito: any, id: string): boolean => {
    return !!arrayFavorito?.find((item: any) => item.track.id === id)
}

export const getPlaylistRedux = async (arrayPlaylist: any, arrayFavorite: any) => {
    const playlist: any[] = [];
    if (arrayPlaylist.length > 0 && arrayFavorite.length > 0) {
        arrayPlaylist?.forEach((item: any) => {
            if (isFavorite(arrayFavorite, item.track.id)) {
                item.isFavorite = true;
            } else {
                item.isFavorite = false;
            }
            playlist.push(item);
        });
    }
    return playlist;
}
