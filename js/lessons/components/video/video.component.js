import controller from './video.controller';

const VideoComponent = {
  bindings: {
    videoSrc: '@'
  },
  controller,
  template: `
    <div class="video-container">
      <div class="video">
        {{$ctrl.videoSrc}}
      </div>
    </div>
  `
};

export default VideoComponent;
