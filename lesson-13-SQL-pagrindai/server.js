import pg from 'pg';
import express from 'express';
const pool = pg.Pool;

const PORT = 3000;
const connectionString =
  'postgres://ijurckcg:ndXUIvoiUFEtANA4kE1YVSZwsKBCFfVo@suleiman.db.elephantsql.com/ijurckcg';

const PGpool = new pool({
  connectionString,
});

const app = express();

app.get('/people', async (req, res) => {
  const people = await PGpool.query('select * from persons');

  res.json(people.rows);
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
