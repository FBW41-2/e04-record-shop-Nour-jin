// import lowdb
const lowdb = require('lowdb')
const shortid = require('shortid')
// import file interface
const FileSync = require('lowdb/adapters/FileSync')
// setup DB connection
// initialize (mock) Database
const adapter = new FileSync('./data/db.json')
const db = lowdb(adapter)



// Git controller
exports.record_Git = (req, res) => {
    res.json(db.get('records').value())
}

// Post controller
exports.record_Post = (req, res) => {
    const newRecord = req.body
    newRecord.id = shortid.generate()
    db.get('records').push(newRecord).write()
    res.json(db.get('records').value())
}
