export const setSongs = (tracks) => {
  let index = 0;
  return tracks?.reduce((result, track) => {
    if (track.preview_url) {
      track = {
        index: index++,
        id: track.id,
        name: track.name,
        image: track.album.images[1].url,
        artist: { id: track.artists.at(0).id, name: track.artists.at(0).name },
        preview_url: track.preview_url,
      };

      result.push(track);
    }
    return result;
  }, []);
};
