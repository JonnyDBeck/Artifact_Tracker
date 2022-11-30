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
    State: 'chicago',
    City: 'illinois',
    APIID: 'ChIJl8NTEawsDogRwXH-IVDyH2A',
  },
  {
    Name: `Monteverde Restaurant & Pastificio`,
    State: 'chicago',
    City: 'illinois',
    APIID: 'ChIJMViM4dssDogRdmIJH2z_Q10',
  },
  {
    Name: `The Capital Grille`,
    State: 'chicago',
    City: 'illinois',
    APIID: 'ChIJo9QCaqssDogRmmJ0MAf-aeE',
  },
  {
    Name: `Blue Point Grille`,
    State: 'cleveland',
    City: 'ohio',
    APIID: 'ChIJwejCoX3wMIgR0FzkNYMYRIU',
  },
  {
    Name: `Cleveland Chop`,
    State: 'cleveland',
    City: 'ohio',
    APIID: 'ChIJY3OJoH3wMIgRRCNcayigGxE',
  },
  {
    Name: `L'Albatros`,
    State: 'cleveland',
    City: 'ohio',
    APIID: 'ChIJFa2X9or7MIgRggAEZDIKT50',
  },
];

const seedResturant = () => Resturant.bulkCreate(resturantData);

module.exports = seedResturant;