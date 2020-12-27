module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        up: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        down: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
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
            defaultValue: NULL,
        }
    }, {
        timestamps: false,
  });
};