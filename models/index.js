const User = require('./User');
const seedCountry = require('./countryData');

User.hasMany(Project, {
    foreignKey: 'user_is',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, seedCountry };