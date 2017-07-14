enum BottleType{
	None,Bottle1,Bottle2
}
class Bottle extends eui.Image{
	public bottleType:BottleType;
	public constructor(type:BottleType) {
		super();
		this.bottleType = type;
		switch(type){
			case BottleType.Bottle1: 
				this.source = RES.getRes("f2_png");
				break;
			case BottleType.Bottle2: 
				this.source = RES.getRes("boss_png");
				break;
			default:
				break;
		}
		
	}
	
	private _IsSelected : boolean;
	public get IsSelected() : boolean {
		return this._IsSelected;
	}
	public set IsSelected(v : boolean) {
		this._IsSelected = v;
		this.alpha = v ? 0.5:1;
	}
	
}