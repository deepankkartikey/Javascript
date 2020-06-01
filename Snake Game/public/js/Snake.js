export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInterval = 500;
        this.direction = Phaser.Math.Vector3.LEFT;
        this.body = [];
        this.body.push(
            this.scene.add.rectangle(100,100,16,16,0xff0000).setOrigin(0)
        );
        scene.input.keyboard.on('keydown', e => {
            this.keydown(e);
        });
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
        for(var i = this.body.length -1; i > 0; i--)
        {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }

        this.body[0].x += this.direction.x*16;
        this.body[0].y += this.direction.y*16;
    }
}