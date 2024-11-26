function updateQueue() {
    dragManager.deregisterAll();
    // don't update queue if nothing is in it
    if (playback_queue_array.length < 1)
        return;

    /* CREATE CONTAINER */
    let container = new ElementContainerElement();
    let i = 0;

    let tempNowPlayingHtml;

    playback_queue_array.forEach(projectId => {
        let project = new Project(projectId);

        if (i === 0) {
            // create now playing item

            let nowPlaying = new QueueItemElement(projectId);
            // set attributes
            nowPlaying.setTitle(project.getTitle());
            nowPlaying.setArtist(project.getArtist());
            nowPlaying.setCollection(project.getCollection());
            nowPlaying.setTime(project.getTime());
            nowPlaying.setIsNowPlaying(true);

            /* SET HTML */
            tempNowPlayingHtml = nowPlaying.toString();
        } else {
            // create next up item

            let queueItem = new QueueItemElement(projectId);
            queueItem.setTitle(project.getTitle());
            queueItem.setArtist(project.getArtist());
            queueItem.setCollection(project.getCollection());
            queueItem.setTime(project.getTime());
            queueItem.setQueueNumber(i + 1);
            container.add(queueItem);

        }
        i++;
    });

    let timeAtLoad = Date.now();

    let interval = setInterval(function () {
        if (Date.now() - timeAtLoad > 5000) {
            clearInterval(interval);
            error('time out trying to set queue html...');
        }

        let htmlTargetNowPlaying = document.getElementById('queue-now-playing-target');
        let htmlTargetNextUp = document.getElementById('queue-next-up-target');

        if(htmlTargetNextUp !== null && htmlTargetNowPlaying !== null) {

            htmlTargetNowPlaying.innerHTML = tempNowPlayingHtml;
            htmlTargetNextUp.innerHTML = container.toString();

            // register, since html now exists
            i = 0;
            playback_queue_array.forEach(projectId => {
                if (i !== 0) {
                    dragManager.register(projectId);
                }
                i++;
            });

            clearInterval(interval);
            error('successfully set queue html');

        }

    }, 100);
}