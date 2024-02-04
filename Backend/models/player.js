const { DataTypes, Model } = require("sequelize")
const bcrypt=require('bcrypt')
const dbConnection = require("../services/dbService")




    const Player=dbConnection.define
    (
        'Player',
        {
            player_id:
            {
                primaryKey:true,
                type:DataTypes.UUID
            },
            player_name:
            {
                type:DataTypes.STRING,
            },
            email:
            {
                type:DataTypes.STRING,
                allowNull:false,
                unique:true,
                validate:
                {
                    isEmail:
                    {
                        msg:"Nem megfelelő email cím!"
                    },
                    notNull:
                    {
                        msg:"Az email cím megadása kötelező!"
                    },
                    notEmpty:
                    {
                        msg:"Az email cím megadása kötelező!"
                    }
                }
            },
            password:
            {
                type:DataTypes.STRING,
                allowNull:false,
                validate:
                {
                    notNull:
                    {
                        msg:"A jelszó megadása kötelező!"
                    },
                    notEmpty:
                    {
                        msg:"A jelszó megadása kötelező!"
                    },
                    len:
                    {
                        args:[8,20],
                        msg:"A jelszónak 8 és 20 karakter között kell lennie!"
                    }
                }
            },
            HP:
            {
                type:DataTypes.DOUBLE,
                allowNull:false,
                defaultValue:0
            },
            money:
            {
                type:DataTypes.DOUBLE,
                allowNull:false,
                defaultValue:0,
                validate:
                {
                    min:0
                }
            },
            world_name:
            {
                type:DataTypes.STRING,
            },
            stone:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            wood:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            coal:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            iron:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            wheat:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            fish:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            objX:
            {
                type:DataTypes.DOUBLE,
                allowNull:false,
                defaultValue:0
            },
            objY:
            {
                type:DataTypes.DOUBLE,
                allowNull:false,
                defaultValue:0
            },
            blockX:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            blockY:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            }
        },
        {
            tableName:'players',
            timestamps:false,
            hooks:
            {
                beforeCreate:async(user)=>
                {
                    user.password=await bcrypt.hash(user.password,await bcrypt.genSalt(10))
                }
            },
        }
    )
    Player.associate=(models)=>
    {
Player.belongsToMany(models.ToolType,{through:"tools",timestamps:false,foreignKey:"player_id"})
Player.belongsToMany(models.Quest,{through:models.QuestStatistics,foreignKey:"player_id"})
Player.belongsToMany(models.EnemyType,{through:models.Enemy,foreignKey:"world_id"})
Player.hasMany(models.Resident,{foreignKey:"world_id"})
    }

Player.prototype.comparePassword=async function(password)
{
    return await bcrypt.compare(password,this.password)
}

module.exports=Player
