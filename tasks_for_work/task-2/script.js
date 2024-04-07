class CheckMouse {
    constructor(elem, options) {
        this.elem = elem;
        this.checkInterval = options.checkInterval || 30;
        this.sendInterval = options.sendInterval || 3000;
        this.url = options.url || "";
        this.array = [];
        this.lastSentTime = Date.now();

    }

    startTracking() {
        this.elem.addEventListener("mousemove", this.trackMouse.bind(this))
        setInterval(() => {
            this.sendData();
        }, this.sendInterval);
    }

    trackMouse(event) {
        const currentTime = Date.now();
        const rect = element.getBoundingClientRect();
        if (currentTime - this.lastSentTime >= this.sendInterval) {
            this.sendData();
        }

        this.array.push({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            time: currentTime
        })
    }

    sendArray() {
        if (this.array.length == 0) return;
        console.log("Our sending array: ", this.array);

        this.array = [];
        this.lastSentTime = Date.now();
    }
}


const trackedOptions = {
    checkInterval: 30,
    sendInterval: 3000,
    url: "https://our_server.com"
}

const elementToTrack = document.querySelector(".element's_Class");
const outTracker = new CheckMouse(elementToTrack, trackedOptions);