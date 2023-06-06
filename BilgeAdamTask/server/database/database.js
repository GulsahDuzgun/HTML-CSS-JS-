var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

function CreateMessagesTable() {
    const messagesTableQuery = `CREATE TABLE messages (
            message text,
            message_type integer,
            full_name text,
            email text,
            phone text
        )`;

    db.run(messagesTableQuery, (err) => {
        if (err) {
            console.log(err)
        }
    });
}

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }
    
    else {
        console.log('Connected to the SQLite database.')
        CreateMessagesTable();
    }
});


module.exports = db