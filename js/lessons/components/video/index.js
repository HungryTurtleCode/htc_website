import angular from 'angular';
import video from './video.component';

import videogular from 'videogular';
import videogularControls from 'videogular-controls';
import videogularOverlayPlay from 'videogular-overlay-play';
import videogularPoster from 'videogular-poster';

const videoComponent = angular
  .module('video.module', [
    videogular,
    videogularControls,
    videogularOverlayPlay,
    videogularPoster
  ])
  .component('lessonVideo', video)
  .name;

export default videoComponent;
