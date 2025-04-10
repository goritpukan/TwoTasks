ctx.prototype.__forEachStyle = function(obj, callback) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        callback.call(this, keys[i]);
    }
};
ctx.prototype.__applyStyleState = function (styleState) {
    this.__forEachStyle(styleState, (key) => {
        this[key] = styleState[key];
    });
};
ctx.prototype.__setDefaultStyles = function () {
    this.__forEachStyle(STYLES, (key) => {
        this[key] = STYLES[key].canvas;
    })
};
ctx.prototype.__getStyleState = function () {
    let styleState = {};
    this.__forEachStyle(STYLES, (key) => {
        styleState[key] = this[key];
    })
    return styleState;
};