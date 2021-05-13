const data = [
  {
    id: 1,
    album: 'Reasonable Doubt',
    sales: '1,514,000',
  },
  {
    id: 2,
    album: 'In My Lifetime, Vol. 1',
    sales: '1,412,000',
  },
  {
    id: 3,
    album: 'Vol. 2... Hard Knock Life',
    sales: '5,400,000',
  },
  {
    id: 4,
    album: 'Vol. 3... Life and Times of S. Carter',
    sales: '3,093,000',
  },
  {
    id: 5,
    album: 'The Dynasty: Roc La Familia',
    sales: '2,521,000',
  },
  {
    id: 6,
    album: 'The Blueprint',
    sales: '2,711,000',
  },
  {
    id: 7,
    album: 'The Blueprint 2: The Gift & The Curse',
    sales: '2,117,000',
  },
  {
    id: 8,
    album: 'The Black Album',
    sales: '3,516,000',
  },
  {
    id: 9,
    album: 'Kingdom Come',
    sales: '1,510,000',
  },
  {
    id: 10,
    album: 'American Gangster',
    sales: '1,131,000',
  },
  {
    id: 11,
    album: 'The Blueprint 3',
    sales: '1,933,000',
  },
  {
    id: 12,
    album: 'Magna Carta... Holy Grail',
    sales: '1,130,000',
  },
  {
    id: 13,
    album: '4:44',
    sales: '399,000',
  },
];

const list = () => {
  return [...data]; // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
  const post = data.find((post) => post.id === +id);
  return { ...post }; // Again, we copy the post data before returning so the original information is safe.
};

module.exports = { list: list, find: find };
