var simultaneous_popups = 3;

var configs = [
  {
    title: 'Subscribe to our great newsletter',
    content: `
      <p>We promise we will deliver only quality content to your inbox.</p>
      <p>We hate spam as much as you, so we will limit sponsored messages only to three every day. That's our promise!</p>
      <p>
        Your email address, please:
        <input type="email">
      </p>
    `,
    primary: 'Subscribe now!',
    secondary: 'Remind me later',
    background: '#ccc',
    border: '2px solid #333'
  },
  {
    title: 'Word from our sponsor',
    content: `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6TcRjxPyhv0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `,
    primary: 'Go to sponsor website!',
    secondary: 'Not now',
    background: '#ffff00',
    border: '5px solid #c00'
  },
  {
    title: 'Disable AdBlock',
    content: `
      <p>Hey. We have detected that you are blocking ads.</p>
      <p>We hate advertising as much as you. Maybe even more. But displaying ads to you pays our bills. So please, consider whitelisting our site, so that we can show you lots of fantastic full-page autoplay video ads with sound. Mmmkay?</p>
      <p>Thanks!</p>
    `,
    primary: 'Disable AdBlock',
    secondary: 'Remind me in 10 seconds',
    background: '#fff',
    border: '1px solid #00c'
  },
  {
    title: 'Like us on Facebook!',
    content: `
      <p>Since this is your first time on our website and we are pretty sure you're not coming back, we would like to ask you to at least like us on Facebook.</p>
      <p>Giving us like on Facebook is <strong style="color: #c00;">FREE</strong> and simple. Just click on button below.</p>
    `,
    primary: '<img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Facebook_logo_thumbs_up_like_transparent_SVG.svg" style="height: 1em;" /> LIKE',
    secondary: 'I\'d rather follow you on Twitter',
    background: '#fff',
    border: '10px solid #00c'
  },
  {
    title: 'Allow desktop notifications',
    content: `
      <p>Look, buddy. There's no real reason why we need this. We just want the permission.</p>
    `,
    primary: 'Allow',
    secondary: 'Display notifications anyway',
    background: '#ccc',
    border: '1px solid #333'
  },
  {
    title: 'Share your geolocation',
    content: `
      <p>Look, buddy. There's no real reason why we need this. We just want the permission.</p>
    `,
    primary: 'Allow',
    secondary: 'Just use geoip instead',
    background: '#ccc',
    border: '1px solid #333'
  },
  {
    title: 'Before you go...',
    content: `
      <div style="color: #fff;">
        <p>We would like to do last attempt to keep your attention.</p>
        <p>Yeah, we know. There's nothing of value on our website. No interesting content, just copy/pasted crap from somewhere else. But we need to keep you here as long as posible, so that we can show you some more ads.</p>
        <p>So please, stay with us.</p>
      </div>
    `,
    primary: 'Ok, I\'ll stay',
    secondary: 'Just 5 more minutes...',
    background: '#c00',
    border: '10px solid #000'
  },
  {
    title: 'We use cookies',
    content: `
      <p>Everybody uses cookies. Nobody cares. But we have to ask for your permission anyway.</p>
      <p>So click "allow". Or don't. We don't care. We'll use cookies anyway.</p>
    `,
    primary: 'Allow',
    secondary: 'I don\'t care',
    background: '#ccccff',
    border: '1px solid #000'
  },
  {
    title: 'GDPR compliance notice',
    content: `
      <p>There's this new European law, that attempts to protect your private data. We have to ask for your permission to abuse your data.</p>
      <p>But to be honest, we don't care. We will take your data anyway and sell it to everybody. And if somebody finds out, we will say we were hacked by Russians. Or we will blame it on the intern.</p>
    `,
    primary: 'Confirm',
    secondary: 'Just steal my data',
    background: '#ccccff',
    border: '1px solid #000'
  }

];

function getRandomConfig () {
  return configs[Math.floor(Math.random() * configs.length)];
}

function rnd (min, max) {
  return Math.round(min + (Math.random() * (max - min)));
}

function createPopup (config) {
  var left = rnd(5, 20);
  var top = rnd(5, 20);
  var bottom = rnd(5, 20);
  var right = rnd(5, 20);

  var element = document.createElement('div');
  element.innerHTML = `
    <div class="popup" style="top: ${top}vh; left: ${left}vw; bottom: ${bottom}vw; right: ${right}vw; background: ${config.background}; border: ${config.border}">
      <h2>${config.title}</h2>
      <div class="popup_content">${config.content}</div>
      <div class="popup_buttons">
        <button class="primary">${config.primary}</button>
        <button class="secondary">${config.secondary}</button>
      </div>
      <div class="popup_close" title="Close this annoying popup">&times;</div>
    </div>
  `;
  element.querySelectorAll('.popup_close, .primary, .secondary').forEach(function (clickable_element) {
    clickable_element.addEventListener('click', function () {
      element.parentNode.removeChild(element);
      createPopup(getRandomConfig());
    })
  });

  var popups_element = document.querySelector('#popups');
  popups_element.insertBefore(element, popups_element.firstChild);
}

for (var i = 0; i < simultaneous_popups; i++) {
  createPopup(getRandomConfig());
}