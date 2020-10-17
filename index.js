class RPG {
    /**
    * 
    * @param {String} id 
    */
    Player(id){
        return new Player(id);
    }
    /**
    * 
    * @param {String} id 
    */
    Map(id){
        return new Map(id);
    }
}


class Player{
    /**
     * 
     * @param {String} id 
     */
    constructor(id) {
        this.id = id;
        this.connected = false;
    }
    async connect() {
        this.connected = true;

        return this;

    }
    async disconnect() {
        if (this.connected === true) {
            this.connected = false;

            return this.connected;
        }
    }
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} mapID
     */
    async spawn(mapID,x, y) {
        if(mapID) {
            if (this.connected === true) {
                this.x = x;
                this.y = y;
    
                return {x:x,y:y,mapID:mapID,rpg:this};
            }
        }
    }
    /**
     * 
     * @param {"up"|"right"|"back"|"left"} type
     * @param {Number} number
     */
    async move(type, number) {
        if (this.connected === true) {
            if (type === "up") {
                this.y += number;
            } else if (type === "back") {
                this.y -= number;
            } else if (type === "left") {
                this.x -= number;
            } else if (type === "right") {
                this.x += number;
            }
            return {x:this.x,y:this.y,rpg:this};
        }
    }
}
class Map{
    /**
     * 
     * @param {String} id 
     */
    constructor(id) {
        this.id = id;
    }
    /**
     * 
     * @param {Number} maxX 
     * @param {Number} maxY 
     */
    async generate(maxX,maxY){
        this.maxX = maxX;
        this.maxY = maxY;
        return {maxX:maxX,maxY:maxY,myMap:this}
    }
    async getId(){
        return this.id;
    }
}

export default RPG;
