module.exports = class Page {
    get loginWidget() {
        return $('//*[@content-desc="Login"]');
    }
}
