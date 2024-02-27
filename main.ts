player.onChat("jump", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
player.onChat("\"chicken\"", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
