



//GetUser and room from url
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})


document.getElementById('room-name').innerHTML = room

const joinUrl = "http://localhost/join.html?room=" + room;




document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = document.getElementById('msg').value;


    const div = document.createElement('div');
    let results = `
    <div class="message">
      <p class="meta">${"you"} <span>${moment().format('MMM Do YY, h:mm a')}</span></p>
     <p class="text">
      ${text}
       </p>
      </div>
    `
    div.innerHTML = results;


    document.querySelector('.chat-messages').appendChild(div);

    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
    document.getElementById('msg').value = "";


})