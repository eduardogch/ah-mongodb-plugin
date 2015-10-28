exports.default = {
    mongo: function(api){
        return {
            enable: true,
            startMongo: true,
            connectionURL: process.env.MONGODB || 'mongodb://localhost:27017/test',
            debug: true,
            modelPath: api.projectRoot + '/models'
        };
    }
};