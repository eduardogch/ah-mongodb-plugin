exports.userView = {
    name:                   'book',
    description:            'Return book info from MongoDB',
    outputExample:          {},

    run: function(api, data, next){
        api.models.Book.findById("56301824138cd73058d42382").then(function(book){
            if(!book) return next(new Error('book not found'));
            data.response.book = book.year;
            next();
        }).catch(next);
    }
};