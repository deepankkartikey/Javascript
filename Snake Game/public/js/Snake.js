export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInterval = 500;
        this.tilesize = 16;
        this.direction = Phaser.Math.Vector3.LEFT;
        this.body = [];
        this.body.push(
            this.scene.add
            .rectangle(this.scene.game.config.width/2 ,
                        this.scene.game.config.height/2 ,
                        this.tilesize,this.tilesize,0xff0000)
            .setOrigin(0)
        );  
        this.apple = this.scene.add
                    .rectangle(0,0,this.tilesize,this.tilesize,0x00ff00)
                    .setOrigin(0)
        this.placeApple();
        scene.input.keyboard.on('keydown', e => {
            this.keydown(e);
        });
    }

    placeApple(){
        this.apple.x = Math.floor(Math.random() * this.scene.game.config.width/this.tilesize) * this.tilesize;
        this.apple.y = Math.floor(Math.random() * this.scene.game.config.height/this.tilesize) * this.tilesize;
    }

    keydown(event){
        console.log(event);
        switch(event.keyCode){
            case 37: // left
                this.direction = Phaser.Math.Vector3.LEFT;
                break;
            case 38: // up
                this.direction = Phaser.Math.Vector3.UP;
                break;
            case 39: // right
                this.direction = Phaser.Math.Vector3.RIGHT;  
                break;
            case 40: // down
                this.direction = Phaser.Math.Vector3.DOWN;
                break;
        }
    }

    update(time){
        if(time >= this.lastMoveTime+this.moveInterval){
            this.lastMoveTime = time;
            this.move();
        }
    }

    move(){
        var x = this.body[0].x + this.direction.x * this.tilesize;
        var y = this.body[0].y + this.direction.y * this.tilesize;

        if(this.apple.x === x && this.apple.y === y){
            //eaten the apple
            this.body.push(this.scene.add.rectangle(0,0,this.tilesize, this.tilesize,0xffffff).setOrigin(0))
            this.placeApple()
        }

        for(var i = this.body.length -1; i > 0; i--)
        {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }

        this.body[0].x = x;
        this.body[0].y = y;
    }
}