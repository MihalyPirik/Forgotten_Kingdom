const { DataTypes } = require("sequelize")
const bcrypt = require('bcrypt')
const dbConnection = require("../services/dbService")

const Player = dbConnection.define
    (
        'Player',
        {
            player_id:
            {
                primaryKey: true,
                type: DataTypes.UUID
            },
            player_name:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Kötelező a név megadása!"
                    },
                    notEmpty: {
                        msg: "Kötelező a név megadása!"
                    },
                    len: {
                        args: [4],
                        msg: "A névnek minimum 4 karakter hosszúnak kell lennie!"
                    }

                }
            },
            email:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: { msg: "Ez az email cím már foglalt" },
                validate:
                {
                    isEmail:
                    {
                        msg: "Nem megfelelő email cím!"
                    },
                    notNull:
                    {
                        msg: "Az email cím megadása kötelező!"
                    },
                    notEmpty:
                    {
                        msg: "Az email cím megadása kötelező!"
                    }
                }
            },
            password:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validate:
                {
                    notNull:
                    {
                        msg: "A jelszó megadása kötelező!"
                    },
                    notEmpty:
                    {
                        msg: "A jelszó megadása kötelező!"
                    },
                    len:
                    {
                        args: [8],
                        msg: "A jelszónak minimum 8 karakteresnek kell lennie!!"
                    }
                }
            },
            HP:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 100,
                validate:
                {
                    min: 0,
                    max: 100
                }
            },
            money:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 100,
                validate:
                {
                    min: 0
                }
            },
            world_name:
            {
                type: DataTypes.STRING,
                defaultValue: 'New World'
            },
            stone:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 100
            },
            wood:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 100
            },
            coal:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 100
            },
            iron:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 100
            },
            wheat:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 100
            },
            fish:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 100
            },
            objX:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            objY:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            blockX:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            blockY:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            tableName: 'players',
            hooks:
            {
                beforeCreate: async (user) => {
                    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt(10))
                }
            },
        }
    )
Player.associate = (models) => {
    Player.belongsToMany(models.ToolType, { through: models.Tool, foreignKey: "player_id" })
    Player.belongsToMany(models.QuestType, { through: models.Quest, foreignKey: "player_id" })
    Player.belongsToMany(models.EnemyType, { through: models.Enemy, foreignKey: "world_id" })
    Player.belongsToMany(models.BuildingType, { through: models.Building, foreignKey: "world_id" })
    Player.hasMany(models.Resident, { foreignKey: "world_id" })
    Player.hasMany(models.Tool, { foreignKey: 'player_id' })
    Player.hasMany(models.Enemy, { foreignKey: 'world_id' })
    Player.hasMany(models.Building, { foreignKey: 'world_id' })
    Player.hasMany(models.Quest, { foreignKey: 'player_id', as: 'playerQuest' })
    Player.hasMany(models.Market, { foreignKey: 'player_id' })
}

Player.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = Player
