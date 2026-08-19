// Global object exercise - 1

setTimeout(() => {
    console.log("it's time");
    clearInterval(int);
}, 4000);

const int = setInterval(() => {
    console.log('still interval');

}, 1000);