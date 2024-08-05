export default function randomNumberFromRange(min: number, max: number) {
    return Math.random() * (max - min) + min
}