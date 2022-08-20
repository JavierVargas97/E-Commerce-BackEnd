
const { Tag } = require('../models');
const tagData = [{
  tag_name: 'War',
},
{
  tag_name: 'Action',
},
{
  tag_name: 'Adventure',
},
{
  tag_name: 'Sport',
},
{
  tag_name: '+18',
},
{
  tag_name: 'Drama',
},
{
  tag_name: 'Arcade',
},
{
  tag_name: 'Simulation',
},
{
  tag_name: 'Fight',
},
];
const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;