function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
  }
  return messages
}
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown() {
    var i = 10;
    while (i >= 0) {
        console.log(i--)
    }

}