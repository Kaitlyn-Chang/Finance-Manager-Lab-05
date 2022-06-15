-- Make payment table
CREATE TABLE 'purchase' (
  'id' INT NOT NULL AUTO_INCREMENT,
  'item' VARCHAR(45) NOT NULL,
  'quantity' INT NOT NULL,
  'cost' DECIMAL(5,2) NOT NULL,
  'description' VARCHAR(150) NULL,
  PRIMARY KEY ('id')
);


