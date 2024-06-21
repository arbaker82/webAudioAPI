document.querySelector('#play').addEventListener('click', () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const actx = new AudioContext();
    if (!actx) throw 'AudioContext not supported :(';

    const osc = actx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 440;
    osc.connect(actx.destination);
    osc.start();
    osc.stop(actx.currentTime + 2);
});
