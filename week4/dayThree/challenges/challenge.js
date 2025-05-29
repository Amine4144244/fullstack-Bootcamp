class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}

const video1 = new Video("JavaScript Basics", "Alice", 300);
video1.watch();

const video2 = new Video("Advanced CSS Tricks", "Bob", 450);
video2.watch();

const videosData = [
    { title: "React Tutorial", uploader: "Charlie", time: 600 },
    { title: "Node.js Crash Course", uploader: "Dana", time: 900 },
    { title: "Vue.js Guide", uploader: "Eve", time: 400 },
    { title: "Python for Beginners", uploader: "Frank", time: 800 },
    { title: "HTML5 Deep Dive", uploader: "Grace", time: 350 }
];

videosData.forEach(data => {
    const video = new Video(data.title, data.uploader, data.time);
    video.watch();
});