const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Comm = require('./comm')(sequelize, Sequelize);

db.User.hasMany(db.Post, { foreignKey: 'writer_id', sourceKey: 'id'});
db.User.hasMany(db.Comm, { foreignKey: 'writer_id', sourceKey: 'id'});

db.Post.hasMany(db.Comm, { foreignKey: 'comm_on', sourceKey: 'post_no'});
db.Post.belongsTo(db.User, {foreignKey: 'writer_id', targetKey: 'id'});

db.Comm.belongsTo(db.User, {foreignKey: 'writer_id', targetKey: 'id'});
db.Comm.belongsTo(db.Post, {foreignKey: 'comm_on', targetKey: 'post_no'});

module.exports = db;
