/* global AFRAME, speechSynthesis, SpeechSynthesisUtterance */

AFRAME.registerComponent('tts', {
  schema: {
    text: { default: 'hello' },
    on: { default: 'click' },
    loop: { default: false }
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.on, function (evt) {
      // const voices = synth.getVoices();
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = data.text;
      utterance.lang = 'en-US';
      utterance.rate = 1.2;
      // console.log(voices[0]);
      // utterance.voice = voices[0];
      // u.onend = function(event) { alert('Finished in ' + event.elapsedTime + ' seconds.'); }
      speechSynthesis.speak(utterance);
    });
  },

  remove: function () {
  },

  tick: function (t, dt) {
  }
});
