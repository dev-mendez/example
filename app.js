class Button {
    container = document.getElementById('container');
  static showText() {
    //Cleaning the current screens
    //const container = document.getElementById('container');
    container.innerHTML = '';

    //generating text
    // let cont = document.getElementById('container');
    const p = document.createElement('p');
    const b = document.createElement('hr');
    const text = document.createTextNode(
      'Soy un texto creado por el metodo showText de la clase Button'
    );

    container.appendChild(p.appendChild(text));

    //changing bacground
    container.style.backgroundColor = 'rgb(218, 144, 226)';
  }

  static showCountDown() {}

  static showHelp() {
    //const container = document.getElementById('container');
    container.innerHTML = '';
    let p = document.createElement('p');
    let text = document.createTextNode(
      'If you need some help please visit this link www.help.com'
    );
    container.appendChild(p.appendChild(text));
    container.style.backgroundColor = 'rgb(118, 144, 226)';
  }
}
