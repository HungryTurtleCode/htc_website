import controller from './video.controller';

const VideoComponent = {
  bindings: {
    videoSrc: '@'
  },
  controller,
  template: `
    <div class="video-container">
      <div class="video">
        <videogular vg-theme="$ctrl.config.theme">
          <vg-media
            vg-src="$ctrl.lessonVid">
          </vg-media>

          <vg-controls vg-autohide="$ctrl.autohide" vg-autohide-time="$ctrl.autohideTime">
            <vg-play-pause-button></vg-play-pause-button>
            <vg-time-display>{{currentTime | date:'mm:ss'}}</vg-time-display>
            <vg-scrub-bar>
              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
            </vg-scrub-bar>
            <vg-time-display>{{totalTime | date:'mm:ss':'+0000'}}</vg-time-display>
            <vg-volume>
              <vg-mute-button</vg-mute-button>
              <vg-volume-bar></vg-volume-bar>
            </vg-volume>
            <vg-playback-button></vg-playback-button>
            <vg-fullscreen-button></vg-fullscreen-button>
          </vg-controls>

          <vg-overlay-play></vg-overlay-play>
          <vg-poster vg-url="$ctrl.poster"></vg-poster>

        </videogular>
      </div>
    </div>
  `
};

export default VideoComponent;
