-- Insert new row into payment table
INSERT INTO payment 
    (`item`, `quantity`, `cost`, `description`) 
VALUES 
    (?, ?, ?, ?);