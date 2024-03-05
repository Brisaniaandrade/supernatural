scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
    game.splash("Congrats")
})
function Car_race () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 500)
    tiles.setCurrentTilemap(tilemap`level9`)
    car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    car.setPosition(20, 21)
    direction1 = "N"
    direction2 = "N"
    info.startCountdown(50)
    info.setLife(3)
    scene.cameraFollowSprite(car)
    tiles.placeOnRandomTile(car, assets.tile`myTile`)
    if (controller.left.isPressed()) {
        direction1 = "L"
        car = sprites.create(img`
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . 8 8 6 6 6 6 6 8 . . . 
            . . . . 8 8 6 6 6 6 6 6 6 8 . . 
            . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
            . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
            . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
            8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
            8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
            8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
            8 6 8 8 8 8 b b b b 8 b b 8 b 8 
            8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
            8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f 8 8 
            . 8 8 f b c c f 8 8 f b c c f . 
            . . . . b b f . . . . b b f . . 
            `, SpriteKind.Projectile)
        car.setVelocity(-50, 0)
    } else if (controller.right.isPressed()) {
        direction1 = "R"
        car = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
            . 6 8 b b b 8 b b b b 8 6 6 6 6 
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            . 8 f f f f 8 8 8 8 f f f 8 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        car.setVelocity(50, 0)
    } else if (controller.up.isPressed()) {
        direction1 = "B"
        car = sprites.create(img`
            . . . . . . 8 8 c c 8 8 . . . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            . . . . 6 c 6 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 6 9 6 6 6 6 6 c 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 c 6 9 9 6 6 6 c 6 f . 
            . . . 8 6 c 8 c c c c 8 c 6 8 . 
            . . . 8 6 8 c b b b b c 8 6 8 . 
            . . . 8 6 8 b b b b b b 8 6 8 . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . f 8 d 8 8 8 8 8 8 d 8 f . 
            . . . f 8 6 d 8 8 8 8 d 6 8 f . 
            . . . f f 8 8 8 8 8 8 8 8 f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Projectile)
        car.setVelocity(0, -40)
    } else if (controller.down.isPressed()) {
        direction1 = "F"
        car = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 6 6 . . . . 
            . . . . . 6 6 9 9 6 6 6 6 . . . 
            . . . . . c 9 6 6 6 6 6 c . . . 
            . . . . 6 c 9 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 c 9 6 6 6 6 6 c 6 f . 
            . . . f 8 c 6 6 6 6 6 6 c 8 f . 
            . . . f 6 c 6 b b b b 6 c 6 f . 
            . . . 8 6 6 b c c c c b 6 6 8 . 
            . . . 8 8 b c c c c c c b 8 8 . 
            . . . f 8 9 9 9 9 9 9 9 9 8 f . 
            . . . f 8 d 6 6 6 6 6 6 d 8 f . 
            . . . . 6 d d 6 6 6 6 d d 6 f . 
            . . . . f 6 d 6 6 6 6 d 6 f . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            `, SpriteKind.Projectile)
        car.setVelocity(0, 40)
    } else {
    	
    }
}
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
function Call_Enemies () {
    tiles.setCurrentTilemap(tilemap`level8`)
    list = []
    GhostImage = [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        for (let index = 0; index < 10; index++) {
            let Location: tiles.Location[] = []
            Ghost = sprites.create(GhostImage._pickRandom(), SpriteKind.Enemy)
            tiles.placeOnTile(Ghost, Location.removeAt(randint(0, list.length)))
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "D") {
        let mySprite1: Sprite = null
        mySprite1.setVelocity(0, 40)
    }
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
function Level_One_Women_in_White () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
    })
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile25`, function (sprite, location) {
    game.reset()
    game.gameOver(false)
})
let Ghost: Sprite = null
let GhostImage: Image[] = []
let list: number[] = []
let direction2 = ""
let direction1 = ""
let car: Sprite = null
story.printText("Remember that Sam is the youngest and Dean is the oldest, as the game goes and you go into levels there would be facts that you would need to remember as they woud be asked later on and would make you win or lose the game.", 78, 50, 15)
tiles.loadMap(tiles.createMap(tilemap`level1`))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f 3 3 5 3 3 5 3 d f f . . 
    . . . f d f 3 5 5 3 f f d f . . 
    . . . f d f 3 3 3 3 3 f f . . . 
    . . . f f 3 5 3 3 5 3 3 f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . . . . f f . . . . . 
    `, SpriteKind.Player))
let Sam = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
let Dean = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
controller.player1.moveSprite(Sam, 100, 100)
controller.player2.moveSprite(Dean, 100, 100)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
tiles.placeOnRandomTile(Sam, assets.tile`myTile`)
tiles.placeOnRandomTile(Dean, assets.tile`myTile3`)
if (true) {
	
} else if (false) {
    Level_One_Women_in_White()
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else {
	
}
