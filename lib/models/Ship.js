const pool = require('../utils/pool');

module.exports = class Ship {
  id;
  name;
  faction; 
  class_specifications;
  crew_compliment;
  length_meters;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.faction = row.faction;
    this.class_specifications = row.class_specifications;
    this.crew_compliment = row.crew_compliment;
    this.length_meters = row.length_meters;
  }
  
  static async getGreeting(){
    return 'Howdy';
  }
  
  static async insert({ 
    name, 
    faction, 
    class_specifications, 
    crew_compliment, 
    length_meters 
  }) {
    const { rows } = await pool.query(
      `
        INSERT INTO star_trek_ships(
          name, 
          faction, 
          class_specifications, crew_compliment, 
          length_meters
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [
        name, 
        faction, 
        class_specifications, crew_compliment, 
        length_meters
      ]
    );

    return new Ship(rows[0]);
  }

  static async findAll(){
    const { rows } = await pool.query(
      `
        SELECT
          *
        FROM
          star_trek_ships
      `
    );

    return rows.map(row => new Ship(row));
  }

  static async getShipById(id){
    const { rows } = await pool.query(
      `
        SELECT
          *
        FROM
          star_trek_ships
        WHERE
          id=$1
      `,
      [id]
    );

    if(!rows[0]) return null;
    return new Ship(rows[0]);
  }
};
