module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comm', {
        comm_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        writer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comm_on: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text:  {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '\0',
        }
    }, {
        timestamps: false,
  });
};