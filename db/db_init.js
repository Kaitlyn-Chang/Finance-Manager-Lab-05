//read SQL from .sql files in /db/queries/init/ subdirectory
const fs = require("fs");

// (Re)Sets up the database, including a little bit of sample data
const db = require("./db_connection");

/**** Delete existing table, if any ****/

const drop_purchase_table_sql = "DROP TABLE IF EXISTS purchase;"

db.execute(drop_purchase_table_sql);

/**** Create "purchase" table (again)  ****/

const create_purchase_table_sql = `
    CREATE TABLE purchase (
        id INT NOT NULL AUTO_INCREMENT,
        item VARCHAR(45) NOT NULL,
        quantity INT NOT NULL,
        cost DECIMAL(5,2) NOT NULL,
        description VARCHAR(150) NULL,
        PRIMARY KEY (id)
    );
`
db.execute(create_purchase_table_sql);

/**** Create some sample items ****/

const insert_purchase_table_sql = `
    INSERT INTO purchase 
        (item, quantity, cost) 
    VALUES 
        (?, ?, ?);
`

db.execute(insert_purchase_table_sql, ['Banana', '5', '5.40', 'Grocery shopping']);

db.execute(insert_purchase_table_sql, ['Orange', '6', '5.60', 'Everyone likes oranges']);

db.execute(insert_purchase_table_sql, ['Grape', '7', '5.80', 'Favorite fruit']);

db.execute(insert_purchase_table_sql, ['Cucumber', '1', '5.90', 'Very good']);

/**** Read the sample items inserted ****/

const read_purchase_table_sql = "SELECT * FROM purchase";

db.execute(read_purchase_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'purchase' initialized with:")
        console.log(results);
    }
);

db.end();

/*

// Alternatively, instead of putting SQL in string literals, read the SQL from files using the "fs" package.
// Put this code at the top, and remove all the SQL string literals defined through the file.
const fs = require("fs");

const drop_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/drop_stuff_table.sql", { encoding: "UTF-8" });
const create_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/create_stuff_table.sql", { encoding: "UTF-8" });
const insert_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/insert_stuff_table.sql", { encoding: "UTF-8" });
const read_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/read_stuff_table.sql", { encoding: "UTF-8" });

*/

