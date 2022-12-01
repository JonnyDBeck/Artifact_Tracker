const { Resturant } = require('../models');

const resturantData = [
  {
    Name: `Rossilli's Restaurant`,
    State: 'ohio',
    City: 'findlay',
    APIID: 'ChIJuYHCRpGrPogRpUfaZUZ2A48'
  },
  {
    Name: `Pilgrim Family Restaurant`,
    State: 'ohio',
    City: 'findlay',
    APIID: 'ChIJra5JLuKrPogRKhNt6qoiWdE'
  },
  {
    Name: `Bistro On Main`,
    State: 'ohio',
    City: 'findlay',
    APIID: 'ChIJAxvBkZGrPogRIb7nErOV11E',
  },
  {
    Name: `The Purple Pig Restaurant`,
    State: 'illinois',
    City: 'chicago',
    APIID: 'ChIJl8NTEawsDogRwXH-IVDyH2A',
  },
  {
    Name: `Monteverde Restaurant & Pastificio`,
    State: 'illinois',
    City: 'chicago',
    APIID: 'ChIJMViM4dssDogRdmIJH2z_Q10',
  },
  {
    Name: `The Capital Grille`,
    State: 'illinois',
    City: 'chicago',
    APIID: 'ChIJo9QCaqssDogRmmJ0MAf-aeE',
  },
  {
    Name: `Blue Point Grille`,
    State: 'ohio',
    City: 'cleveland',
    APIID: 'ChIJwejCoX3wMIgR0FzkNYMYRIU',
  },
  {
    Name: `Cleveland Chop`,
    State: 'ohio',
    City: 'cleveland',
    APIID: 'ChIJY3OJoH3wMIgRRCNcayigGxE',
  },
  {
    Name: `L'Albatros`,
    State: 'ohio',
    City: 'cleveland',
    APIID: 'ChIJFa2X9or7MIgRggAEZDIKT50',
  },
];

const seedResturant = () => Resturant.bulkCreate(resturantData);

module.exports = seedResturant;