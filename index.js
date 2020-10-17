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

            return {connected:this.connected,player:this};
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
    
                return {x:x,y:y,mapID:mapID,player:this};
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
            return {x:this.x,y:this.y,player:this};
        }
    }
    /**
     * 
     * @param {Number} number 
     */
    async setHealth(number){
        if(this.connected === true) this.health = number;
        return {health:this.health,player:this};
    }
    /**
     * 
     * @param {Number} number 
     */
    async addHealth(number){
        if(this.connected === true) this.health += number;
        return {health:this.health,player:this};
    }
    /**
     * 
     * @param {Number} number 
     */
    async removeHealth(number){
        if(this.connected === true) this.health -= number;
        return {health:this.health,player:this};
    }
    /**
     * 
     * @param {Number} number 
     */
    async setAttack(number){
        if(this.connected === true) this.attack = number;
        return {attack:this.attack,player:this}
    }
    /**
     * 
     * @param {Number} number 
     */
    async addAttack(number){
        if(this.connected === true) this.attack += number;
        return {attack:this.attack,player:this}
    }
    /**
     * 
     * @param {Number} number 
     */
    async removeAttack(number){
        if(this.connected === true) this.attack -= number;
        return {attack:this.attack,player:this}
    }
    /**
     * 
     * @param {Number} number 
     */
    async setDefense(number){
        if(this.connected === true) this.defense = number;
        return {defense:this.defense,player:this}
    }
    /**
     * 
     * @param {Number} number 
     */
    async addDefense(number){
        if(this.connected === true) this.defense += number;
        return {defense:this.defense,player:this}
    }
    /**
     * 
     * @param {Number} number 
     */
    async removeDefense(number){
        if(this.connected === true) this.defense -= number;
        return {defense:this.defense,player:this}
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
        return {maxX:maxX,maxY:maxY,map:this}
    }
    async getId(){
        return this.id;
    }
}

export default RPG;