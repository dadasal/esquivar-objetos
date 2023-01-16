input.onButtonPressed(Button.A, function () {
    arriba.change(LedSpriteProperty.Y, 1)
    abajo.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    arriba.change(LedSpriteProperty.Y, 1)
    abajo.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    arriba.change(LedSpriteProperty.X, 1)
    abajo.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    arriba.change(LedSpriteProperty.X, 1)
    abajo.change(LedSpriteProperty.Y, 1)
})
let abajo: game.LedSprite = null
let arriba: game.LedSprite = null
arriba = game.createSprite(1, 1)
abajo = game.createSprite(3, 4)
let objeto = game.createSprite(4, 4)
basic.forever(function () {
    objeto.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    if (objeto.get(LedSpriteProperty.X) == 0) {
        objeto.set(LedSpriteProperty.X, randint(3, 4))
        objeto.set(LedSpriteProperty.Y, 0)
    }
    if (objeto.isTouching(abajo)) {
        game.gameOver()
    }
    if (objeto.isTouching(arriba)) {
        game.gameOver()
    }
})
