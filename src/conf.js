import {Pane} from 'tweakpane';

class Conf {
    gui = null;

    roughness = 0.4;
    metalness = 0.2;
    transmission = 0.7;
    color = 0xffffff; //0xf4aaff;
    iridescence = 0.0;
    iridescenceIOR = 2.33;

    runSimulation = true;
    showVerletSprings = false;

    constructor() { }

    init() {
        const gui = new Pane()
        this.gui = gui;
    }

    update() {
    }

}
export const conf = new Conf();