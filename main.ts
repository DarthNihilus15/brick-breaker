namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Top = SpriteKind.create()
    export const Brick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.disintegrate, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vx)
    if (sprite.vy >= -150) {
        sprite.vy += 5
    }
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-2 * sprite.vx, sprite.vy)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -2 * sprite.vy)
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, column * 8 + 24)
            column += 1
        }
        column = 0
    }
}
function createBrick (x: number, y: number) {
    randomNumber = Math.randomRange(0, 2)
    if (randomNumber == 0) {
        breakableBrick = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 f f f f f f f f f f f f f f 1 
1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
1 f 1 f f f f f f f f f f 1 f 1 
1 f 1 f f f f f f f f f f 1 f 1 
1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
1 f f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Brick)
        breakableBrick.setPosition(x, y)
    } else if (randomNumber == 1) {
        breakableBrick = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f f f f f f f f f f f f 2 
2 f 2 2 2 2 2 2 2 2 2 2 2 2 f 2 
2 f 2 f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f f f f f 2 f 2 
2 f 2 2 2 2 2 2 2 2 2 2 2 2 f 2 
2 f f f f f f f f f f f f f f 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Brick)
        breakableBrick.setPosition(x, y)
    } else {
        breakableBrick = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
2 8 2 2 2 2 2 2 2 2 2 2 2 2 8 2 
2 8 2 8 8 8 8 8 8 8 8 8 8 2 8 2 
2 8 2 8 8 8 8 8 8 8 8 8 8 2 8 2 
2 8 2 2 2 2 2 2 2 2 2 2 2 2 8 2 
2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Brick)
        breakableBrick.setPosition(x, y)
    }
    numBricks += 1
}
let breakableBrick: Sprite = null
let randomNumber = 0
let numBricks = 0
let column = 0
info.setScore(0)
info.setLife(3)
let startBallVar = 0
let Paddle = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Player)
Paddle.setPosition(80, 110)
controller.moveSprite(Paddle, 100, 0)
Paddle.setFlag(SpriteFlag.StayInScreen, true)
let Top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Top)
Top.setPosition(80, 0)
let Right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
Right.setPosition(159, 55)
let Left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
Left.setPosition(0, 55)
let ballVar = sprites.create(img`
. . . . . . . . 
. 1 1 1 1 1 . . 
1 2 2 2 2 2 1 . 
1 2 8 8 8 2 1 . 
1 2 8 a 8 2 1 . 
1 2 8 8 8 2 1 . 
1 2 2 2 2 2 1 . 
. 1 1 1 1 1 . . 
`, SpriteKind.Ball)
column = 0
numBricks = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(Paddle.x, 104)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        startBallVar = 0
        effects.confetti.startScreenEffect()
        pause(2000)
        effects.confetti.endScreenEffect()
        info.changeScoreBy(100)
        buildSetBricks()
    }
})
