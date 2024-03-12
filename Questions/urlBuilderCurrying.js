// function urlBuilder (protocol) {
//     return function (domain) {
//         return function (page) {
//             return `${protocol}://${domain}/${page}`
//         }
//     }
// }


const urlBuilder = protocol => domain => page => `${protocol}://${domain}/${page}`

console.log(urlBuilder("https")("www.google.com")("home"))


"Partial application transforms one function into another function with small arity(number of params a funciton receive)"