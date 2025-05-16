const asyncHandler = require("express-async-handler");

const Author = require("../models/author");
const Book = require("../models/book");
const BookInstance = require("../models/bookinstance");
const Genre = require("../models/genre");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);
  res.render('index', {
    title: "本地图书馆首页",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  })
});

// 显示所有的图书
exports.book_list = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author").sort({title: 1}).populate('author').exec();
  console.log('allBooks===', allBooks)
  res.render("book_list", { title: "Book List", book_list: allBooks });
});

// 显示特定图书的详情页面。
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`未实现：图书详情页面：${req.params.id}`);
});

// 通过 GET 显示创建图书。
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：创建图书 GET");
});

// 以 POST 方式处理创建图书。
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：Book 创建 POST");
});

// 通过 GET 显示删除图书。
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：删除 GET");
});

// 以 POST 方式处理删除图书。
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：删除 POST");
});

// 通过 GET 显示更新图书。
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：更新图书 GET");
});

// 处理 POST 时的更新图书。
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：更新图书 POST");
});
