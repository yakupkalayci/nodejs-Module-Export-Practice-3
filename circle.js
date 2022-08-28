function circleArea(r) {
    console.log(Math.PI * (r ** 2));
}

function circleCircumference(r) {
    console.log(2 * r * Math.PI);
}

module.exports = {
    circleArea,
    circleCircumference
};
