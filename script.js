let synth, reverb;

function preload(){
    synth = new Tone.Synth({
        oscillator: {
            type: "pwm",
        },
    });

    reverb = new Tone.JCReverb(0.5);
}

function setup() {
    createCanvas(400, 400);
    synth.chain(reverb, Tone.Destination);

    let buttonA4 = createButton('A4');
    buttonA4.position(100, 100);
    buttonA4.mousePressed(playA4);

    let buttonB4 = createButton('B4');
    buttonB4.position(200, 100);
    buttonB4.mousePressed(playB4);

    let buttonE5 = createButton('E5');
    buttonE5.position(300, 100);
    buttonE5.mousePressed(playE5);
}

function draw() {
    background(220);
}

function playA4() {
    synth.triggerAttackRelease("A4", 0.5);
}

function playB4() {
    synth.triggerAttackRelease("B4", 0.5);
}

function playE5() {
    synth.triggerAttackRelease("E5", 0.5);
}
