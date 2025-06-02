import { Engine } from './core/Engine';
import { GameLoop } from './core/GameLoop';
import { MainScene } from './scenes/MainScene';

const engine = new Engine('gameCanvas');
const scene = new MainScene(engine);

const loop = new GameLoop(
    (dt) => scene.update(dt),
    () => scene.render(),
);

loop.start();
