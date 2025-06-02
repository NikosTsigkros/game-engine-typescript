import { Engine } from '../core/Engine';

export class MainScene {
    private engine: Engine;
    private x = 0;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    update(dt: number): void {
        this.x += 100 * dt; // Move 100px per second
        if (this.x > this.engine.canvas.width) this.x = 0;
    }

    render(): void {
        const { ctx } = this.engine;
        this.engine.clear();
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, 100, 50, 50);
    }
}
