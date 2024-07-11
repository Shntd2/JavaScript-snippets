let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; // Months are 0-indexed
let day = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let milliseconds = today.getMilliseconds();
let timezoneOffset = today.getTimezoneOffset(); // Minutes offset from UTC

console.log(year, month, day, hours, minutes, seconds, milliseconds, timezoneOffset);
