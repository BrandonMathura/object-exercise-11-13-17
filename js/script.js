var laptop = {
  isHuman: false,
  series: '2017',
  ramGB: 16,
  made: ['March', 'August', 'December'],
  boot: function() {
    console.log('Welcome!');
  },
  sayHiTo: function(name, appt) {
    console.log("Hi " + name + ", you have " + appt + " appointments for today.");
  },
  screen: {
    type: 'oled',
    res: ['1080p', '1440p', '2160p'],
    nits: 400,
    touch: true,
  }
};
laptop.boot();
laptop.sayHiTo("Kurt", 99);
