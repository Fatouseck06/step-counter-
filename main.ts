let Steps = 0
basic.showNumber(Steps)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 800) {
        Steps += 1
        basic.showNumber(Steps)
    }
})
