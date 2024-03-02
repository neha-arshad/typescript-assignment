function make_album(artist: string, albumTitle: string, numTracks?: number): Record<string, unknown> {
    const album: Record<string, unknown> = {
        artist,
        albumTitle,
    };

    if (numTracks !== undefined) {
        album.numTracks = numTracks;
    }

    return album;
}

// Calling the function for three different albums
const album1 = make_album("Adele", "21", 12);
const album2 = make_album("Coldplay", "A Rush of Blood to the Head");
const album3 = make_album("Taylor Swift", "Fearless", 16);

console.log(album1); // Output: { artist: 'Adele', albumTitle: '21', numTracks: 12 }
console.log(album2); // Output: { artist: 'Coldplay', albumTitle: 'A Rush of Blood to the Head' }
console.log(album3); // Output: { artist: 'Taylor Swift', albumTitle: 'Fearless', numTracks: 16 }
