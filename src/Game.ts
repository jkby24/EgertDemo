// TypeScript file
/**
 * name
 */
class Game extends eui.Component {
    public gp_conveyor: eui.Group;
    private pickupBottle:Bottle = null;
    private selectBottle:Bottle = null;
    constructor() {
        super();
        this.skinName = "resource/eui_skins/GameScence.exml";
        egret.startTick(this.onUpdate, this);
        this.addChild(this.pickupBottle = new Bottle(1));
        this.pickupBottle.visible = false;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end,this);
    }
    private lasttime: number = 0;
    private birthtime: number = 0;
    private onUpdate(timestamp: number): boolean {
        var dt = (timestamp - this.lasttime) / 1000;
        this.lasttime = timestamp;
        egret.log(`当前时间戳：${timestamp}`);
        this.birthtime += dt;
        if (this.birthtime > 1) {
            this.birthtime = 0;
            var bottle = new Bottle(<BottleType>Math.floor(Math.random() * 2 + 1));
            bottle.x = Math.random() * this.gp_conveyor.width;
            this.gp_conveyor.addChild(bottle);
        }
        for (var i = this.gp_conveyor.numChildren - 1; i >= 0; i--) {
            var element = <Bottle>this.gp_conveyor.getChildAt(i);
            element.y += dt * 100;
            if (element.y > this.gp_conveyor.height) {
                this.gp_conveyor.removeChild(element);
            }
        }
        return false;
    }
    private ontouch_begin(e:egret.TouchEvent){
        var pt1 = new egret.Point(e.stageX - this.gp_conveyor.x,e.stageY - this.gp_conveyor.y,)
        for (var i = this.gp_conveyor.numChildren - 1; i >= 0; i--) {
            var element = <Bottle>this.gp_conveyor.getChildAt(i);
            var rect = new egret.Rectangle(element.x,element.y,element.width,element.height);
            if(rect.containsPoint(pt1)){

            }
        }
    }
    private ontouch_move(e:egret.Event){

    }
    private ontouch_end(e:egret.Event){

    }

}