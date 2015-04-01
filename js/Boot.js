var state = {};

state.Boot = function (game){

};

state.Boot.prototype = {

    preload: function(){
	//this.load.spritesheet('dude','assets/dude.png',32,48);
//	this.load.spritesheet('baddie','assets/baddie.png', 32,32);
//	this.load.spritesheet('heart','assets/heart.png');
    },

    create: function(){
	this.intro = this.add.text(this.world.centerX - 100, this.world.height/5, "", {size: "32px", fill:"#FFF", align: "center"}); //Setting the text object's spawn location
	
	this.intro.anchor.setTo(0.5,0.5); //Anchoring it to the top center
	this.introText(); //calling the text
    },

    update: function(){
	if(this.input.activePointer.isDown){
	    this.intro.setText("NO LET ME GO!\n\n<You must escape! Click Mouse to continue!>");
	    this.time.events.add(Phaser.Timer.SECOND*3,this.startGame,this);
	    }
    },
    
    introText: function(){

	this.intro.setText("Huh? What are these things!\n");
	this.time.events.add(Phaser.Timer.SECOND*2,function(){
	    
	    this.intro.setText("Scientists: Stay calm, this is for the sake of mankind! ");

	}, this);
    },

    startGame: function(){
	this.state.start('Game');
    }

}
