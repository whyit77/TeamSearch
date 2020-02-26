// require filesystem module
var fs = require('fs');

// where to find the photo in the filesystem that we will store in the DB
var photoPath = path.join( __dirname, './readFrom/fetalPositionMan.png')

// connect to GridFS and Mongo
Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('_ Connection open --');
    var gfs = Grid(conn.db);

    // when connection is open, create write stream with
    // the name to store file as in the DB
    var writestream = gfs.createWriteStream({
        // will be stored in Mongo as 'fetalPositionMan.png'
        filename: 'fetalPositionMan.png'
    })

    // create a read-stream where the picture currently is (photoPath)
    // and pipe it into the database (through write-stream)
    fs.createReadStream(photoPath).pipe(writestream);
    writestream.on('close', function (file){
        // do something with 'file'
        // console logging that it was written successfuly
        console.log(file.filename + ' Written to DB')
    })
});
