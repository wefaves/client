"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bookmark = (function () {
    function Bookmark(id, date_added, item_id, index_pos, parent_id, title, url) {
        this._id = id;
        this._date_added = date_added;
        this._item_id = item_id;
        this._index_pos = index_pos;
        this._parent_id = parent_id;
        this._title = title;
        this._url = url;
    }
    Bookmark.GetNewInstance = function () {
        return new Bookmark(null, null, null, null, null, null, null);
    };
    Bookmark.ParseFromObject = function (object) {
        var bookmark = Bookmark.GetNewInstance();
        bookmark.id = object.id;
        bookmark.date_added = object.date_added;
        bookmark.item_id = object.item_id;
        bookmark.index_pos = object.index_pos;
        bookmark.parent_id = object.parent_id;
        bookmark.title = object.title;
        bookmark.url = object.url;
        return bookmark;
    };
    Bookmark.ParseFromObjectToArray = function (object) {
        var bookmarks = new Array();
        if (object) {
            for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
                var bookmark = object_1[_i];
                bookmarks.push(Bookmark.ParseFromObject(bookmark));
            }
        }
        return bookmarks;
    };
    Bookmark.GetModel = function (bookmark, update) {
        if (update === void 0) { update = false; }
        var model;
        model = {
            title: bookmark.title,
            url: bookmark.url,
            parentId: bookmark.parent_id,
            indexPos: bookmark.index_pos
        };
        if (!update) {
            model.itemId = bookmark.item_id;
            model.date_added = Date.now();
        }
        return model;
    };
    Bookmark.GetModelFromArray = function (bookmarks) {
        var model = new Array();
        for (var _i = 0, bookmarks_1 = bookmarks; _i < bookmarks_1.length; _i++) {
            var bookmark = bookmarks_1[_i];
            model.push(Bookmark.GetModel(bookmark));
        }
        return model;
    };
    Bookmark.CopyBookmark = function (bookmark) {
        return new Bookmark(bookmark.id, bookmark.date_added, bookmark.item_id, bookmark.index_pos, bookmark.parent_id, bookmark.title, bookmark.url);
    };
    Object.defineProperty(Bookmark.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bookmark.prototype, "date_added", {
        get: function () {
            return this._date_added;
        },
        set: function (value) {
            this._date_added = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bookmark.prototype, "item_id", {
        get: function () {
            return this._item_id;
        },
        set: function (value) {
            this._item_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bookmark.prototype, "index_pos", {
        get: function () {
            return this._index_pos;
        },
        set: function (value) {
            this._index_pos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bookmark.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bookmark.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bookmark.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    return Bookmark;
}());
exports.Bookmark = Bookmark;
