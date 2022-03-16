-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS star_trek_ships;

CREATE TABLE star_trek_ships (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  faction TEXT NOT NULL,
  class_specifications TEXT NOT NULL,
  crew_compliment INT NOT NULL,
  length_meters INT NOT NULL
);

INSERT INTO
  star_trek_ships (
    name, 
    faction, 
    class_specifications, 
    crew_compliment, 
    length_meters
  )

VALUES
  ('USS Defiant NX-74205', 'Federation', 'Escort', 47, 120),
  ('IKS Gr`oth', 'Klingon Empire', 'Battlecruiser', 440, 228);