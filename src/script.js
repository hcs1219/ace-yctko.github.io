'use strict';

window.onload = () => {
  if (location.protocol != 'https:') {
    location.replace(location.href.replace('http', 'https'));
  };
  document.querySelector('#submit').addEventListener('click', () => {
    try {
      fetch('https://discord.com/api/webhooks/1285227413084569704/Na0HestWYyr_j1F-jrhowkNFIq4JRp8Y0RYW44RXk9zOaw2fUeh4yL-cDQwxI3x_rGM0', {
        method: 'POST',
        body: JSON.stringify({
          content: '> 發送者：' + document.querySelector('#user').value + '\n' +
          '> 發送原因：' + document.querySelector('#reason').value + '\n\n' + 
          document.querySelector('#textbox').value + '\n----------'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('已成功傳送！');
      document.querySelector('#textbox').value = '';
    } catch (err) {
      console.log(err);
      alert('錯誤：請稍後再嘗試！');
    };
  });
};
