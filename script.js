let midiPlayer = null;
let isPlaying = false;

// Function to handle file selection
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const midiData = new Uint8Array(e.target.result);
            playMidi(midiData);
        };
        reader.readAsArrayBuffer(file);
    }
}

// Function to play MIDI file
function playMidi(midiData) {
    if (midiPlayer) {
        midiPlayer.stop();
    }
    midiPlayer = new Tone.Midi().load(midiData, () => {
        midiPlayer.start();
        isPlaying = true;
    });
}

// Function to stop MIDI playback
function stopMidi() {
    if (midiPlayer) {
        midiPlayer.stop();
        isPlaying = false;
    }
}

// Event listeners
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', handleFileSelect);

const playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', () => {
    if (!isPlaying && midiPlayer) {
        midiPlayer.start();
        isPlaying = true;
    }
});

const stopBtn = document.getElementById('stop-btn');
stopBtn.addEventListener('click', () => {
    if (isPlaying && midiPlayer) {
        midiPlayer.stop();
        isPlaying = false;
    }
});
