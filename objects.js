var playlist = {Radiohead: 'Paranoid Android', ["Aphex Twin"]: "Xtal", Autechre: "Pen Expers"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {}