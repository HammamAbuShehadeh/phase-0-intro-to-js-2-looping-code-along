// Code your solutions in this file

function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return messages;
}
function countDown(Number) {
  let countDownNum = Number;
  while (countDownNum >= 0) {
    console.log(countDownNum);
    countDownNum--;
  }
}
