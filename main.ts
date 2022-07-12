let pwm1 = 0
function right () {
    pwm1 += 30
    if (pwm1 >= 255) {
        pwm1 = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    125
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    125
    )
}
function RFFF () {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P20) == 0) {
            stopped()
            iBIT.MotorStop()
            break;
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            stopped()
            iBIT.MotorStop()
            break;
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            stopped()
            iBIT.MotorStop()
            break;
        }
    }
}
function LL () {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            go()
            basic.pause(300)
            while (1) {
                if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    right()
                } else if (pins.digitalReadPin(DigitalPin.P2) != 1) {
                    right()
                    basic.pause(300)
                    iBIT.MotorStop()
                    break;
                }
            }
            break;
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        }
    }
}
function back () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    75
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    75
    )
}
function FFF () {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P20) == 0) {
            stopped()
            iBIT.MotorStop()
            break;
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            stopped()
            iBIT.MotorStop()
            break;
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            stopped()
            iBIT.MotorStop()
            break;
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            stopped()
            iBIT.MotorStop()
            break;
        }
    }
}
function sgo (y: number) {
    go()
    basic.pause(y)
    iBIT.MotorStop()
    basic.pause(1000)
}
function left () {
    pwm1 += 30
    if (pwm1 >= 255) {
        pwm1 = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    125
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    125
    )
}
function RRR () {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            go()
            basic.pause(300)
            while (1) {
                if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    left()
                } else if (pins.digitalReadPin(DigitalPin.P1) != 1) {
                    left()
                    basic.pause(300)
                    iBIT.MotorStop()
                    break;
                }
            }
            break;
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        }
    }
}
input.onButtonPressed(Button.A, function () {
    // main programe
    go()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    RFFF()
    basic.pause(1000)
    sback(1300)
    RRR()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    FFF()
    basic.pause(1000)
    sback(200)
    rotate()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    FFF()
    basic.pause(1000)
    sback(600)
    rotate()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    FFF()
    basic.pause(1000)
    sback(300)
    rotate()
    basic.pause(1000)
    RFFF()
    basic.pause(1000)
    FFF()
})
function stopped () {
    iBIT.MotorStop()
}
// test-zone
input.onButtonPressed(Button.B, function () {
    go()
    basic.pause(1000)
    RRR()
    basic.pause(1000)
    RFFF()
    sback(1700)
    LL()
    basic.pause(1000)
    RRR()
    basic.pause(1000)
    sback(1300)
    LL()
    basic.pause(1000)
    LL()
    basic.pause(1000)
    FFF()
    basic.pause(1000)
    sback(400)
    basic.pause(700)
    rotate()
    LL()
    basic.pause(1000)
    RRR()
    basic.pause(1000)
    FFF()
    sback(2000)
    LL()
    basic.pause(1000)
    RRR()
    basic.pause(1000)
    FFF()
    basic.pause(1000)
    sback(2500)
})
function BBB () {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            back()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            stopped()
            iBIT.MotorStop()
            break;
        }
    }
}
function sback (x: number) {
    back()
    basic.pause(x)
    iBIT.MotorStop()
    basic.pause(1000)
}
// testzone
function rotate () {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            iBIT.MotorStop()
            break;
        }
    }
}
function go () {
    pwm1 = 55
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P20) == 0) {
        go()
        basic.pause(1000)
        RRR()
        basic.pause(1000)
        RFFF()
        sback(1700)
        LL()
        basic.pause(1000)
        RRR()
        basic.pause(1000)
        sback(1300)
        LL()
        basic.pause(1000)
        LL()
        basic.pause(1000)
        FFF()
        basic.pause(1000)
        sback(400)
        basic.pause(700)
        rotate()
        LL()
        basic.pause(1000)
        RRR()
        basic.pause(1000)
        FFF()
        sback(2000)
        LL()
        basic.pause(1000)
        RRR()
        basic.pause(1000)
        FFF()
        basic.pause(1000)
        sback(2500)
    }
})
control.inBackground(function () {
	
})
