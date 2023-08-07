input.onButtonPressed(Button.A, function () {
    F = F / 2
    A = A / 2
    C = C / 2
    E = E / 2
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(A, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(C, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(E, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    F = F * 2
    A = A * 2
    C = C * 2
    E = E * 2
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(F, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(A, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(C, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
let F = 0
let A = 0
let C = 0
let E = 0
E = 659
C = 523
A = 440
F = 349
basic.forever(function () {
	
})
