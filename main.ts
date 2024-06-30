function goFwd () {
    CutebotPro.distanceRunning(CutebotProOrientation.Advance, 10, CutebotProDistanceUnits.Cm)
    basic.showArrow(ArrowNames.North)
}
function goLeft () {
    CutebotPro.trolleySteering(CutebotProTurn.Left, CutebotProAngle.Angle90)
    basic.showArrow(ArrowNames.West)
}
function goBkw () {
    CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 10, CutebotProDistanceUnits.Cm)
    basic.showArrow(ArrowNames.South)
}
function fullStop () {
	
}
function goRt () {
    CutebotPro.trolleySteering(CutebotProTurn.Right, CutebotProAngle.Angle90)
    basic.showArrow(ArrowNames.East)
}
radio.onReceivedValue(function (name, value) {
    cmd = value
})
let cmd = 0
radio.setGroup(1)
cmd = -1
basic.showIcon(IconNames.TShirt)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    if (cmd == 0) {
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
        goFwd()
    } else {
        if (cmd == 1) {
            CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
            goBkw()
        } else {
            if (cmd == 2) {
                CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ffff)
                goRt()
            } else {
                if (cmd == 3) {
                    CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
                    goLeft()
                } else {
                    if (cmd == 5) {
                        CutebotPro.turnOffAllHeadlights()
                        CutebotPro.stopImmediately(CutebotProMotors.ALL)
                    }
                }
            }
        }
    }
    cmd = -1
    basic.pause(100)
})
