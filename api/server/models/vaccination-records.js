'use strict'

module.exports = (sequelize, DataTypes) => {
    const VaccinationRecord = sequelize.define(
        'vaccinationRecord',
        {
            administrationDate: {
                type: DataTypes.DATE,
                required: true,
            },
            endPrice: {
                type: DataTypes.INTEGER,
            },
        },
        {
            paranoid: true,
            underscored: true,
        }
    )
    return VaccinationRecord
}
