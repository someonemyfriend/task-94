import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
    this.div = document.getElementById('emojis')
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    this.removeAllCildNodes(this.div)

    this.emojis.forEach(element => {
      let p = document.createElement('p')
      p.textContent = element;
      this.div.appendChild(p)
      
    });
  }


  addBananas() {
    // In the addBananas()method 
    //you have to implement the map logic
  const monkeys = this.emojis.map(element => {
  return element += this.banana;
  })
  this.setEmojis(monkeys)

  }
  removeAllCildNodes(parent){
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}
