const video = document.getElementById('my_video_1');
let captions = document.getElementsByTagName('p span');


video.addEventListener('timeupdate', (e) => {
  for (i = 0; i < captions.length; i++) {

		let startTime = captions[i].getAttribute('data-start');
		let endTime = captions[i].getAttribute('data-end');
		let currentTime = video.getCurrentTime();

   if (startTime <= currentTime && endTime >= currentTime) {
      captions[i].className = 'highlight';
    } else {
			captions[i].className = '';
		}
  }
});
