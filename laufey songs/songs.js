// ============================================================
//  LAUFEY HEARDLE — SONG DATA
//  Add or remove songs here. Each entry needs:
//    name  : display name shown in the dropdown & answer reveal
//    file  : path/URL to the audio file (mp3, ogg, etc.)
// ============================================================
 
window.LAUFEY_SONGS = [
  // Bewitched
  { name: "From The Start",               file: "laufey%20songs/audio/from_the_start.mp3",               image: "laufey%20songs/audio/images/bewitched.jpg" },
  { name: "Valentine",                    file: "laufey%20songs/audio/valentine.mp3",                    image: "laufey%20songs/audio/images/everything_i_know_about_love.jpg" },
  { name: "Bewitched",                    file: "laufey%20songs/audio/bewitched.mp3",                    image: "laufey%20songs/audio/images/bewitched.jpg" },
  { name: "Let You Break My Heart Again", file: "laufey%20songs/audio/let_you_break_my_heart_again.mp3", image: "laufey%20songs/audio/images/typical_of_me.jpg" },
  { name: "Beautiful Stranger",           file: "laufey%20songs/audio/beautiful_stranger.mp3",           image: "laufey%20songs/audio/images/everything_i_know_about_love.jpg" },
  { name: "Falling Behind",               file: "laufey%20songs/audio/falling_behind.mp3",               image: "laufey%20songs/audio/images/everything_i_know_about_love.jpg" },
  { name: "A Night to Remember",          file: "laufey%20songs/audio/a_night_to_remember.mp3",          image: "laufey%20songs/audio/images/a_night_to_remember.jpg" },
  { name: "Lovesick",                     file: "laufey%20songs/audio/lovesick.mp3",                     image: "laufey%20songs/audio/images/bewitched.jpg" },
  { name: "Promise",                      file: "laufey%20songs/audio/promise.mp3",                      image: "laufey%20songs/audio/images/bewitched.jpg" },
  { name: "Haunted",                      file: "laufey%20songs/audio/haunted.mp3",                      image: "laufey%20songs/audio/images/bewitched.jpg" },
  { name: "But Not For Me",               file: "laufey%20songs/audio/but_not_for_me.mp3",               image: "laufey%20songs/audio/images/my_old_friend.jpg" },
  { name: "Lover Girl",                   file: "laufey%20songs/audio/lover_girl.mp3",                   image: "laufey%20songs/audio/images/lover_girl.jpg" },
  { name: "Bored",                        file: "laufey%20songs/audio/bored.mp3",                        image: "laufey%20songs/audio/images/everything_i_know_about_love.jpg" },
];


  
// How long (seconds) the player is allowed per attempt:
// Index 0 = attempt 1, index 1 = attempt 2, ... last = full song
const ATTEMPT_DURATIONS = [1, 3, 5, 10, Infinity];
