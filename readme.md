# RPG - SIMULATOR

RPG-Simulator can help you in your rpg games
This simulate movement, connection, deconnection and more
Install this and discover all things who are in this javascript plugin

With that you can create an other plugin for most help

## How to use
#### Require
```
const rpg = require("rpg-simulator").default;
const myrpg = new rpg();
const Player = myrpg.Player("anID");
const Map = myrpg.Map("anID");
```
#### Example Code
```
// Player
Player.connect().then(rpg =>{
    console.log("RPG Connected !")
    rpg.spawn(200,100).then(x,y,rpg =>{
        rpg.disconnect("Disconnected, you was on x:"+x+" y:"+y)
    })
})
// Map
Map.generate(200,100).then(({maxX,maxY,myMap})=>{
//Code...
    myMap.getId().then(id =>{
    //Code...
    })
})

```