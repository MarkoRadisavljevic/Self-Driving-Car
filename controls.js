class Controls{
    constructor(){
        this.forward=false
        this.left=false
        this.right = false
        this.reverce=false
        
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(event)=> {
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forvard = true;
                    break;
                case "ArrowDown":
                    this.reverce = true;
                    break;
            }
            console.table(this)
        }
        document.onkeyup=(event)=> {
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forvard = false;
                    break;
                case "ArrowDown":
                    this.reverce = false;
                    break;
            }
            console.table(this)
        }
    }
}