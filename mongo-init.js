const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const MONGO_DBNAME = process.env.MONGO_DBNAME;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;

const adminDb = db.getSiblingDB('admin');
adminDb.auth(MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD);

const userDb = db.getSiblingDB(MONGO_DBNAME);
userDb.createUser({
  user: MONGO_USER,
  pwd: MONGO_PASS,
  roles: [
    { db: MONGO_DBNAME, role: "dbOwner" },
    { db: `${MONGO_DBNAME}_stat`, role: "dbOwner" }
  ]
});
