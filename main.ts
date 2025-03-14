let 周翰林寿命 = 0
basic.showString("" + (周翰林寿命))
cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
if (input.buttonIsPressed(Button.A)) {
	
}
basic.forever(function () {
    周翰林寿命 = 0
    for (let index = 0; index < 5; index++) {
        周翰林寿命 = 周翰林寿命 + cbit_小车类.Ultrasonic_Car()
    }
    周翰林寿命 = 周翰林寿命 / 5
    if (周翰林寿命 > 15) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
    } else {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 200)
        basic.pause(500)
        if (Math.randomBoolean()) {
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 200)
            basic.pause(500)
        } else {
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 200)
            basic.pause(500)
        }
    }
})
