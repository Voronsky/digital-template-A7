var i = 0;
state.Credits = function (game){

};

state.Credits.prototype = {
    preload: function(){

    },
    create:function(){


	this.world.setBounds(0,0,800,600);
	//this.style = {size: "32px", fill:"#FFF", align:"center"};
	this.text = ["Thank you for playing!\n<Click mouse>","Credits go to:\nOpengameArt for sprites and tiles\n<Click Mouse>","Fin"];
	this.creditsText = this.add.text(this.world.centerX,this.world.height/5, "Thats the end of the game!\n<click mouse>", {size: "32px", fill:'#FFF',align:"center"});
	//this.creditsText.anchor.setTo(0.5,0.5);

    },
    update: function(){
	if(this.input.activePointer.isDown){
	  //  this.creditsText.setText("Thanks for playing!");
	    if(i < this.text.length){
		this.creditsText.setText(this.text[i++]);
	    }
	    
	}

    }

}
