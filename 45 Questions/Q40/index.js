"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artistName: artist_name,
        albumTitle: album_title,
    };
    if (tracks !== undefined) {
        album.tracksNumber = tracks;
    }
    return album;
}
//calling three function and creating 3 variables with different value
let album1 = make_album("Alan Walker", "Faded");
let album2 = make_album("Edward Maya", "Stereo Love");
//Calling function with third parameter
let album3 = make_album("Adrian Sina", " That's My Name", 10);
console.log(album1);
console.log(album2);
console.log(album3);
