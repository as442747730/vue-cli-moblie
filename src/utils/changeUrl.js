/**
 * 跳转浏览器地址
 * @method changeUrl
 * @param {string} link 浏览器地址
 */
function changeUrl(link) {
    window.location.href = link;
};

function goTo(link) {
    window.history.go(link)
}

function replace(link) {
    window.location.replace(link)
}

export {
    changeUrl,
    goTo,
    replace
}
