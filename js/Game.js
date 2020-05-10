class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref('playerCount').once("value");
      if(playerCountref.exists()){
       playerCount = playerCountref.val();
       player.getCount();
      }
    
      form = new Form()
      form.display();
    }
  }
  play(){
    form.Hide();
    textSize(30);
    text('GAME IS STARTED',displayWidth/2-40,130);
    Player.getplayerInput();   
    if(allplayers !== undefined){
      var y = 130;
      for(var i in allplayers){
      textSize(15);
     if(i === "player"+player.index){
       fill("red");
     }else{
       fill("black");
     }
      text(allplayers[i].name +':'+ allplayers[i].distance,displayWidth/2+40,y = y + 30);
    } 
    }
   if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    player.distance +=40
    player.update();
  }
  } 
  
}
