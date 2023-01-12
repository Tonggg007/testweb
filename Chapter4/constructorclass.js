class Song {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
    }
  } 
  
  const mySong = new Song ("Bohemian Rhapsody", "Queen");
  console.log (mySong.title);

  const lovesong = new Song("Yesterday", "Beatle");
  console.log (lovesong.title);