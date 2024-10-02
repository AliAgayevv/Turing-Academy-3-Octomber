// Task 1: Simple Timer with setTimeout
// Create a function that logs "Time's up!" to the console after 5 seconds using setTimeout.
// ! start task1
// function simpleTimer(time)
// {
//     setTimeout(() => {
//         alert("Time's up");
//     },time)
// }

// simpleTimer(5000);
// ! end task1

// Task 2: Countdown Timer with setInterval
// Write a function that counts down from 10 to 0 and logs each number to the console every second using setInterval. When the countdown reaches 0, display "Blast off!" and stop the interval.
// ! start task 2
// function countdownTimer(time) {
//   var i = 5;
//   let interval = setInterval(() => {
//     i--;
//     console.log(i);
//     if (i === 0) {
//       clearInterval(interval);
//       setTimeout(() => {
//         console.log("Blast off!");
//       }, 200);
//     }
//   }, 1000);
// }

// countdownTimer();
// ! end task2

// Task 3: Auto-refreshing ContentCreate a function that simulates fetching new data every 3 seconds. Use setInterval to log "Fetching new data..." to the console at regular intervals.
// ! start task3
// function ContentCreate(refreshTime)
// {
//     let interval = setInterval(() =>
//     {
//         console.log("Fetching new data...");
//     },refreshTime);
// }

// ContentCreate(3000);
// ! end task3

// Task 4: Cancel a Timeout
// Write a function that starts a 10-second timer using setTimeout. Provide a button or a condition that can cancel the timer before it completes using clearTimeout.
// ! start task4
// const btn = document.querySelector("#stopBtn");

// let timeout = function () {
//   let timer_seconds = 10;

//   const interval = setInterval(() => {
//     timer_seconds--;
//     console.log(timer_seconds);

//     btn.addEventListener("click", function () {
//       setTimeout(() => {
//         clearInterval(interval);
//       }, 200);

//     });

//   }, 1000);
// };

// timeout();
// ! end task4

// Task 5: Update UI with setInterval
// Create a simple progress bar that fills up over 5 seconds using setInterval. Update the width of the progress bar every 100 milliseconds until it's full.
// ! start task5
const progressBar = document.querySelector(".progress-bar");

function changeProgress()
{
    var i = 0;
    const interval = setInterval(() =>
    {
        if(i >= 100)
        {
            clearInterval(interval);
            return;
        }
        progressBar.style.width = `${i}%`;
        i = i + 2;
    },100)
}

changeProgress();
// ! end task5
