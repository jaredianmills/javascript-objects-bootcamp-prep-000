var playlist = {Radiohead: 'Paranoid Android', ["Aphex Twin"]: "Xtal", Autechre: "Pen Expers"};

function updatePlaylist(playlist, artistName, songTitle) {
  var updatedPlaylist = Object.assign({}, playlist, artistName, songTitle);
  return updatedPlaylist;
}
