let video = document.getElementById('my_video_1');
let captions = document.querySelectorAll('span');


video.addEventListener('timeupdate', (e) => {
  for (let i = 0; i < captions.length; i++) {

		let startTime = captions[i].getAttribute('data-start');
		let endTime = captions[i].getAttribute('data-end');
		let currentTime = video.currentTime;

   if (startTime <= currentTime && endTime >= currentTime) {
      captions[i].className = 'highlight';
    } else {
			captions[i].className = '';
		}
  }
});

$('video').mediaelementplayer({
  features: ['playpause', 'progress', 'volume', 'duration', 'fullscreen'],

});
