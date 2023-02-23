import pg from 'pg';
import dotenv from 'dotenv';
const pool = pg.Pool;

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const PGpool = new pg.Pool({
  connectionString,
});

export default PGpool;
