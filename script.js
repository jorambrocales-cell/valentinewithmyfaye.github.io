function nextPage(pageNumber) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('page' + pageNumber).classList.add('active');
    
    if (pageNumber === 8) {
        createHeartShower();
    }
}

// 1. Password Lock Logic
function checkPassword() {
    const input = document.getElementById('passInput').value;
    if (input.length > 0) {
        playMusic();
        nextPage(2);
    } else {
        alert("Enter any password muna love! Hahaha");
    }
}

function playMusic() {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(e => console.log("Music ready"));
}

// 2. The Runaway "No" Button
function moveButton() {
    const btn = document.getElementById('noButton');
    const area = document.getElementById('btnArea');
    
    // Limits the movement within the view
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// 3. Typing Validator for Faye
function checkLoveType() {
    const input = document.getElementById('loveText').value.toLowerCase();
    const target = "i love you so much my baby";
    const btn = document.getElementById('nextAfterType');
    
    if (input === target) {
        btn.style.display = 'inline-block';
        btn.classList.add('fade-in');
    }
}

// 4. Heart Shower
function createHeartShower() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}