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

  // static async insert({ 
  //   name, 
  //   faction, 
  //   class_specifications, 
  //   crew_compliment, 
  //   length_meters 
  // }) {
  //   // const { rows } = await pool.query(
  //   console.log('here I am');
  //   // )
  //   return 'hi';
  // }
  

  static async getGreeting(){
    return 'Howdy';
  }
};
