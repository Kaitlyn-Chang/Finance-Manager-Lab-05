//read SQL from .sql files in /db/queries/init/ subdirectory
const fs = require("fs");

const drop_purchase_table_sql = fs.readFileSync(__dirname + "/db/queries/init/drop_purchase_table.sql", { encoding: "UTF-8" });
const create_purchase_table_sql = fs.readFileSync(__dirname + "/db/queries/init/create_purchase_table.sql", { encoding: "UTF-8" });
const insert_purchase_table_sql = fs.readFileSync(__dirname + "/db/queries/init/insert_purchase_table.sql", { encoding: "UTF-8" });
const read_purchase_table_sql = fs.readFileSync(__dirname + "/db/queries/init/read_purchase_table.sql", { encoding: "UTF-8" });

// (Re)Sets up the database, including a little bit of sample data
const db = require("./db_connection");

/**** Delete existing table, if any ****/

db.execute(drop_purchase_table_sql);

/**** Create "purchase" table (again)  ****/

db.execute(create_purchase_table_sql);

/**** Create some sample items ****/

db.execute(insert_purchase_table_sql, ['Banana', '5', '5.40', 'Grocery shopping']);

db.execute(insert_purchase_table_sql, ['Orange', '6', '5.60', null]);

db.execute(insert_purchase_table_sql, ['Grape', '7', '5.80', 'Favorite fruit']);

db.execute(insert_purchase_table_sql, ['Cucumber', '1', '5.90', 'Null']);

/**** Read the sample items inserted ****/

db.end();