"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FeedDeleteOptions = (function () {
    function FeedDeleteOptions(bookmarks, history, since) {
        this._bookmarks = bookmarks;
        this._history = history;
        this._since = since;
    }
    Object.defineProperty(FeedDeleteOptions.prototype, "bookmarks", {
        get: function () {
            return this._bookmarks;
        },
        set: function (value) {
            this._bookmarks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeedDeleteOptions.prototype, "history", {
        get: function () {
            return this._history;
        },
        set: function (value) {
            this._history = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeedDeleteOptions.prototype, "since", {
        get: function () {
            return this._since;
        },
        set: function (value) {
            this._since = value;
        },
        enumerable: true,
        configurable: true
    });
    return FeedDeleteOptions;
}());
exports.FeedDeleteOptions = FeedDeleteOptions;
