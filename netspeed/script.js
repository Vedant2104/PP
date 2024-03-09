const imageAddr = "https://www.positivepromotions.com/images/1000/MKV-26.jpg";
const downloadSize = 84000;

function showResults(speedBps, speedKbps, speedMbps) {
    const progress = document.getElementById("progress");
    progress.innerHTML = `
        Your connection speed is:
        ${speedBps} bps
        ${speedKbps} kbps
        ${speedMbps} Mbps
    `;
}

function measureConnectionSpeed() {
    const startTime = new Date().getTime();
    const download = new Image();

    download.onload = function () {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = downloadSize * 8;
        const speedBps = (bitsLoaded / duration).toFixed(2);
        const speedKbps = (speedBps / 1024).toFixed(2);
        const speedMbps = (speedKbps / 1024).toFixed(2);

        showResults(speedBps, speedKbps, speedMbps);
    };

    download.onerror = function () {
        showResults("Invalid image or error downloading");
    };

    const cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
}

window.addEventListener("load", measureConnectionSpeed);