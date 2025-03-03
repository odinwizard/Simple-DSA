function maskify(cardNumber) {
    if (typeof cardNumber === 'number') {
        cardNumber = cardNumber.toString()
    }
    //optioanal edge cases..................
    if (cardNumber.length < 6) {
        return cardNumber
    }
    const firstChar = cardNumber[0]
    const lastFourChars = cardNumber.slice(-4)

    let maskedSection = ''
    for(let i = 1; i < Array.length - 4; i++) {
        const char = cardNumber[i]
        maskedSection += isNaN(parseInt(char)) ? char : '#'
    }
    return firstChar + maskedSection + lastFourChars
}