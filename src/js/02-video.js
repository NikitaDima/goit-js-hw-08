import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const STORAGE_KEY = 'videoplayer-current-time';

const currentTime = function (data) {
  const currentSeconds = data.seconds;
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
