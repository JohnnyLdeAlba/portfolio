export class t_controller {

  intervalActive:boolean;
  intervalId:ReturnType<typeof setInterval>;
  visible:boolean;
  show:Function;
  backdropVisible:boolean;
  backdropShow:Function;
  
  drawerVariant:"permanent" | "persistent";
  drawerColor:string;
  windowWidth:number;

  constructor() {

    this.intervalActive = false;

    this.intervalId = setInterval(() => {}, 0);
    clearInterval(this.intervalId);

    this.visible = false;
    this.show = (visible:boolean) => null;
    this.backdropVisible = false;
    this.backdropShow = (visible:boolean) => null;

    this.drawerVariant = "permanent";
    this.drawerColor = '';
    this.windowWidth = 0;
  }
}

export class t_context {

  controllers: {[key:string]:t_controller};

  constructor() {
    this.controllers = {};
  }

  getController(id:string) {
    
    if (typeof this.controllers[id] == 'undefined') {
      const controller = new t_controller;
      this.controllers[id] = controller;
    }

    return this.controllers[id];
  }
};

const context = new t_context();

export function getContext() {return context;}
export function getController(id:string) {return context.getController(id);}
