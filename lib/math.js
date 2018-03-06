"use strict"

exports.randomInt = (lower, upper) => {
    return {
        result: () => Math.floor(Math.random() * (upper - lower)) + lower
    }
}