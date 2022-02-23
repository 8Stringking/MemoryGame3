

const play = require("../js");

test("a random number is multipled by 4 and adds 1", () => {
    expect(play(1)).toBe(5)
}); 

module.exports = play