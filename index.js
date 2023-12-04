function playPause() {
  let icon = document.getElementById("icon");
  if (icon.classList.contains("fa-play")) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    setInterval(() => {}, 500);
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}
const options = {
  method: "GET",
  url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
  params: { id: "2396871" },
  headers: {
    "X-RapidAPI-Key": "28be42341emshab63a36b2c016fap158139jsnf462bced1fd9",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};
async function getSongId(id) {
  let response = await fetch.get(
    "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/" + id,
    options
  );
  let data = await response.json();
}
