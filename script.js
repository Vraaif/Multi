document.getElementById('loadStreams').addEventListener('click', function() {
    const stream1 = document.getElementById('stream1').value.trim();
    const stream2 = document.getElementById('stream2').value.trim();
    
    if (stream1 && stream2) {
        document.getElementById('stream1-frame').src = `https://player.twitch.tv/?channel=${stream1}&parent=vraaif.github.io`;
        document.getElementById('stream2-frame').src = `https://player.twitch.tv/?channel=${stream2}&parent=vraaif.github.io`;
        
        document.getElementById('chat1-box').innerHTML = `<iframe src="https://www.twitch.tv/embed/${stream1}/chat?parent=vraaif.github.io" frameborder="0" scrolling="no" height="100%" width="100%"></iframe>`;
        document.getElementById('chat2-box').innerHTML = `<iframe src="https://www.twitch.tv/embed/${stream2}/chat?parent=vraaif.github.io" frameborder="0" scrolling="no" height="100%" width="100%"></iframe>`;
    } else {
        alert('Per favore, inserisci i nomi degli stream.');
    }
});
