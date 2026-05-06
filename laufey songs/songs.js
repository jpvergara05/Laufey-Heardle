// ============================================================
//  LAUFEY HEARDLE — SONG DATA
//  Add or remove songs here. Each entry needs:
//    name  : display name shown in the dropdown & answer reveal
//    file  : path/URL to the audio file (mp3, ogg, etc.)
// ============================================================
 
window.LAUFEY_SONGS = [
  { name: "From The Start",               file: "laufey%20songs/audio/from_the_start.mp3" }, 
  { name: "Valentine",                    file: "laufey%20songs/audio/valentine.mp3" }, 
  { name: "Bewitched",                    file: "laufey%20songs/audio/bewitched.mp3" }, 
  { name: "Let You Break My Heart Again", file: "laufey%20songs/audio/let_you_break_my_heart_again.mp3" }, 
  { name: "Beautiful Stranger",           file: "laufey%20songs/audio/beautiful_stranger.mp3" }, 
  { name: "Falling Behind",               file: "laufey%20songs/audio/falling_behind.mp3" },
  { name: "A Night to Remember",          file: "laufey%20songs/audio/a_night_to_remember.mp3" }, 
  { name: "Lovesick",                     file: "laufey%20songs/audio/lovesick.mp3" }, 
  { name: "Promise",                      file: "laufey%20songs/audio/promise.mp3" }, 
  { name: "Haunted",                      file: "laufey%20songs/audio/haunted.mp3" }, 
  { name: "But Not For Me",               file: "laufey%20songs/audio/but_not_for_me.mp3" }, 
  { name: "Lover Girl",                   file: "laufey%20songs/audio/lover_girl.mp3" }, 
];
// If they get it right or wrong, take them to a separate page with the full song playing in the background, and the album cover with 
// a hazy trippy effect on it. There should be a button that takes them back the the original page to play again, 
// and a button that takes them to the next song. Maybe also a button to share the song on social media?

  
// How long (seconds) the player is allowed per attempt:
// Index 0 = attempt 1, index 1 = attempt 2, ... last = full song
const ATTEMPT_DURATIONS = [1, 3, 5, 10, Infinity];
