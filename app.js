//adding some method to de buttons

class Button {
  constructor(cont) {
    this.cont = cont;
    cont = document.getElementById('container');
  }

  static showText(cont) {
    //Cleaning the current screen
    //let cont = document.getElementById('container');
    cont.innerHTML = '';

    //generating text
    // let cont = document.getElementById('container');
    let p = document.createElement('p');
    let b = document.createElement('hr');
    let text = document.createTextNode(
      'Soy un texto creado por el metodo showText de la clase Button'
    );

    this.cont.appendChild(p.appendChild(text));

    //changing bacground
    cont.style.backgroundColor = 'rgb(218, 144, 226)';
  }

  static showCountDown() {}

  static showHelp() {
    //let cont = document.getElementById('container');
    cont.innerHTML = '';
    let p = document.createElement('p');
    let text = document.createTextNode(
      'If you need some help please visit this link www.help.com'
    );
    cont.appendChild(p.appendChild(text));
    cont.style.backgroundColor = 'rgb(118, 144, 226)';
  }
}
