const { Country } = require('../models');

const countrydata = [
  {
    country: 'Uruguay',
    capital: 'Montevideo',
    currency: 'Uruguayan Peso',
    country_id: 1,
    language: 'Spanish',
    description:
      'Uruguay is famous for its beaches and good cultivatable lands. It is known as one of the most progressive nations on the continent. Much like most South American countries, it has a Spanish heritage.',
  },
  {
    country: 'Kenya',
    capital: 'Nairobi',
    currency: 'Kenyan shilling',
    country_id: 2,
    language: 'Swahili',
    description:
      'Kenya is known for being the worlds best safari destination, with 50 epic national parks and reserves that are home to diverse wildlife, including the Big Five – lions, leopards, elephants, rhinos and buffalo.',
  },
  {
    country: 'Mexico',
    capital: 'Mexico City',
    currency: 'Peso',
    country_id: 3,
    language: '',
    description:
      'Mexico is Latin Americas most visited tourist destination.',
  },
  {
    country: 'Mongolia',
    capital: 'Ulaanbaatar',
    currency: '	Tögrög',
    country_id: 4,
    language: 'Mongolian',
    description:
      'The great Genghis Khan is Mongolia’s founding father.',
  },
  {
    country: 'Japan',
    capital: 'Tokyo',
    currency: 'Yen',
    country_id: 5,
    language: 'Japanese',
    description:
      'Japan feels very safe in general. They say you could leave your wallet on the floor of the busiest metro station and come back an hour later to still find it there, untouched.',
  },
  {
    country: 'Spain',
    capital: 'Madrid',
    currency: 'Euro',
    country_id: 6,
    language: 'Spanish',
    description:
      'Probably a mind-blowing fact about Spain right now, but what you thought was just plain, regular Spain, isn’t as simply defined as that. It’s made up of various Autonomous Communities that have a certain level of self-government.Galicia is Celtic. The Basque Country speaks Basque (which is unlike any European language). Valencia, Catalonia, and the Balearic Islands are Occitan and Catalan. Super interesting.',
  },
  {
    country: 'Lebanon',
    capital: 'Beirut',
    currency: 'Lebanese Pound',
    country_id: 7,
    language: 'Arabic, French',
    description:
      'Lebanon offers plenty: from ancient Roman ruins, to well-preserved castles, limestone caves, historic Churches and Mosques, beautiful beaches nestled in the Mediterranean Sea, world-renowned Lebanese cuisine, nonstop nightlife and discothèques, to mountainous ski resorts.',
  },
  {
    country: 'Malta',
    capital: 'Valletta',
    currency: 'Euro',
    country_id: 8,
    language: 'Maltese',
    description:
      'Most people associate Malta with its beaches, but even the architecture is unique and ancient. Empires have come and reigned over Malta, and they have left their glimpses behind. This is why you will find intricate and impressive architecture throughout the country.',
  },
  {
    country: 'Brazil',
    capital: 'Brasilia',
    currency: 'Real',
    country_id: 9,
    language: 'Portuguese',
    description:
      'Famous for its rainforests, beaches, and lively city life in Rio De Janeiro and Brasilia, Brazilian society includes people of indigenous, Portuguese, European, and African ancestries.',
  },
];

const seedCountry = () => Country.bulkCreate(countrydata);

module.exports = seedCountry;