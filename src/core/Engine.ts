export class Engine {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvasId: string) {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!canvas || !ctx) throw new Error('Canvas context not found');
        this.canvas = canvas;
        this.ctx = ctx;
    }

    clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
