type GameUpdate = (deltaTime: number) => void;
type GameRender = () => void;

export class GameLoop {
    lastTime = 0;
    update: GameUpdate;
    render: GameRender;

    constructor(update: GameUpdate, render: GameRender) {
        this.update = update;
        this.render = render;
    }

    start(): void {
        requestAnimationFrame(this.loop.bind(this));
    }

    private loop(currentTime: number): void {
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(this.loop.bind(this));
    }
}
