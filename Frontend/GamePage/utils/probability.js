/**
 * 
 * @description A minim határ nyitott a maximum zárt
 */
export function Random(min, max) { return Math.floor(Math.random() * (max - min) + min) }
export function RandomFloatNumber(min, max) {
    return Math.random() * (max - min) + min
}