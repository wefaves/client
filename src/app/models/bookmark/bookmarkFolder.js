"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookmark_1 = require("./bookmark");
var BookmarkFolder = (function () {
    function BookmarkFolder(id, bookmarks, bookmark_folder_child, date_added, date_group_modified, item_id, index_pos, parent_id, title) {
        this._id = id;
        this._bookmarks = bookmarks;
        this._bookmark_folder_child = bookmark_folder_child;
        this._date_added = date_added;
        this._date_group_modified = date_group_modified;
        this._item_id = item_id;
        this._index_pos = index_pos;
        this._parent_id = parent_id;
        this._title = title;
    }
    BookmarkFolder.GetNewInstance = function () {
        return new BookmarkFolder(null, null, null, null, null, null, null, null, null);
    };
    BookmarkFolder.ParseFromObject = function (object) {
        var bookmarkFolder = BookmarkFolder.GetNewInstance();
        bookmarkFolder.id = object.id;
        bookmarkFolder.bookmarks = bookmark_1.Bookmark.ParseFromObjectToArray(object.bookmarks);
        if (object.bookmark_folder_child) {
            if (object.bookmark_folder_child.length > 0) {
                bookmarkFolder.bookmark_folder_child = new Array();
                for (var _i = 0, _a = object.bookmark_folder_child; _i < _a.length; _i++) {
                    var child = _a[_i];
                    bookmarkFolder.bookmark_folder_child.push(BookmarkFolder.ParseFromObject(child));
                }
            }
        }
        bookmarkFolder.date_added = object.date_added;
        bookmarkFolder.date_group_modified = object.date_group_modified;
        bookmarkFolder.item_id = object.item_id;
        bookmarkFolder.index_pos = object.index_pos;
        bookmarkFolder.parent_id = object.parent_id;
        bookmarkFolder.title = object.title;
        return bookmarkFolder;
    };
    BookmarkFolder.ParseFromObjectToArray = function (object) {
        var bookmarkFolders = new Array();
        if (object) {
            for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
                var bookmarkFolder = object_1[_i];
                bookmarkFolders.push(BookmarkFolder.ParseFromObject(bookmarkFolder));
            }
        }
        return bookmarkFolders;
    };
    BookmarkFolder.GetModel = function (bookmark_folder, update) {
        if (update === void 0) { update = false; }
        var model;
        model = {
            title: bookmark_folder.title,
        };
        if (!update) {
            model.itemId = bookmark_folder.item_id;
            model.dateGroupModified = bookmark_folder.date_group_modified;
            model.parentId = bookmark_folder.parent_id;
            model.dateAdded = bookmark_folder.date_added;
            model.indexPos = bookmark_folder.index_pos;
        }
        return model;
    };
    BookmarkFolder.GetFullModel = function (folder) {
        var model = {
            id: folder.id,
            bookmarks: bookmark_1.Bookmark.GetModelFromArray(bookmark_1.Bookmark.ParseFromObjectToArray(folder.bookmarks)),
            bookmark_folder_child: BookmarkFolder.GetModelFromArray(BookmarkFolder.ParseFromObjectToArray(folder.bookmark_folder_child)),
            date_added: folder.date_added,
            date_group_modified: folder.date_group_modified,
            item_id: folder.item_id,
            index_pos: folder.index_pos,
            parent_id: folder.parent_id,
            title: folder.title
        };
        return model;
    };
    BookmarkFolder.GetModelFromArray = function (folders) {
        var model = new Array();
        for (var _i = 0, folders_1 = folders; _i < folders_1.length; _i++) {
            var folder = folders_1[_i];
            model.push(BookmarkFolder.GetFullModel(folder));
        }
        return model;
    };
    BookmarkFolder.Copy = function (folder) {
        return new BookmarkFolder(folder.id, folder.bookmarks, folder.bookmark_folder_child, folder.date_added, folder.date_group_modified, folder.item_id, folder.index_pos, folder.parent_id, folder.title);
    };
    Object.defineProperty(BookmarkFolder.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "bookmarks", {
        get: function () {
            return this._bookmarks;
        },
        set: function (value) {
            this._bookmarks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "bookmark_folder_child", {
        get: function () {
            return this._bookmark_folder_child;
        },
        set: function (value) {
            this._bookmark_folder_child = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "date_added", {
        get: function () {
            return this._date_added;
        },
        set: function (value) {
            this._date_added = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "date_group_modified", {
        get: function () {
            return this._date_group_modified;
        },
        set: function (value) {
            this._date_group_modified = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "item_id", {
        get: function () {
            return this._item_id;
        },
        set: function (value) {
            this._item_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "index_pos", {
        get: function () {
            return this._index_pos;
        },
        set: function (value) {
            this._index_pos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookmarkFolder.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    return BookmarkFolder;
}());
exports.BookmarkFolder = BookmarkFolder;
