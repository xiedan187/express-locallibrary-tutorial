const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");
const Book = require('../models/book');
const async = require('async');

// 显示所有的流派。
exports.genre_list = asyncHandler(async (req, res, next) => {
  const genre_list = await Genre.find().sort([['name', 'ascending']]).exec();
  res.render('genre_list', {
    title: '类别列表',
    genre_list: genre_list
  })
});

// 显示特定流派的详情页。
// Display detail page for a specific Genre.
exports.genre_detail = function (req, res, next) {
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books: function (callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // No results.
        var err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    },
  );
};


// 通过 GET 显示创建流派。
exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：流派创建 GET");
});

// 以 POST 方式处理创建流派。
exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：流派创建 POST");
});

// 通过 GET 显示流派删除表单。
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：流派删除 GET");
});

// 处理 POST 时的流派删除。
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：流派删除 POST");
});

// 通过 GET 显示流派更新表单。
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：流派更新 GET");
});

// 处理 POST 上的流派更新。
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：流派更新 POST");
});
