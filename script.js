
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "auth.html";
  }

const toggleModeBtn = document.getElementById('toggleMode');

toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
let timer;
let timeLeft = 25 * 60; // default 25 mins
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer-display").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startSession() {
  if (isRunning) return; // don’t start again if already running
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      showToast("🎉 Focus session complete!");

    }
  }, 1000);
}
function setCustomTime() {
  const input = document.getElementById("customTime").value;
  const minutes = parseInt(input);

  if (!isNaN(minutes) && minutes > 0) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = minutes * 60;
    updateTimerDisplay();
  } else {
    alert("Please enter a valid number of minutes.");
  }
}


function pauseSession() {
  clearInterval(timer);
  isRunning = false;
}

function resetSession() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

function setTime(mins) {
  clearInterval(timer);
  isRunning = false;
  timeLeft = mins * 60;
  updateTimerDisplay();
}


updateTimerDisplay();
function showToast(message) {
  const toast = document.getElementById("session-alert");
  const toastSound = new Audio("sounds/toast-sound.mp3");

  toast.textContent = message;
  toast.classList.add("show");

  toastSound.currentTime = 0; // rewind if already playing
  toastSound.play();

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000); 
}



window.addEventListener('load', () => {
  const video = document.getElementById('videos');
  video.src = 'videos/Rain.mp4'; 
  video.load();
  video.play();

  document.getElementById('loader').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
});

function changevideos(videos) {
  const video = document.getElementById("videos");
  video.src = `videos/${videos}.mp4`;
  video.load();
  video.play();
}
let currentAudio = null;


const audioMap = {
  Rain: new Audio("sounds/rain.mp3"),
  Forest: new Audio("sounds/Forest.mp3"),
  Cafe: new Audio("sounds/Cafe.mp3"),
  Waves: new Audio("sounds/Waves.mp3"),
  Fireplace: new Audio("sounds/Fireplace.mp3"),
};


Object.values(audioMap).forEach(audio => {
  audio.loop = true;
});

function changevideos(videos) {
  
  const video = document.getElementById("videos");
  video.src = `videos/${videos}.mp4`;
  video.play();

  
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  
  const newAudio = audioMap[videos];
  newAudio.volume = document.getElementById("volume").value;
  newAudio.play();
  currentAudio = newAudio;
}


document.getElementById("volume").addEventListener("input", function () {
  if (currentAudio) {
    currentAudio.volume = this.value;
  }
});
const toggleSoundBtn = document.getElementById("toggleSoundBtn");

toggleSoundBtn.addEventListener("click", () => {
  if (!currentAudio) return;

  if (currentAudio.paused) {
    currentAudio.play();
    toggleSoundBtn.textContent = "🔊 Sound On";
  } else {
    currentAudio.pause();
    toggleSoundBtn.textContent = "🔇 Sound Off";
  }
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "auth.html";
});



