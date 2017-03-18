const initialState = {
  1: {
    product: 'Flashlight',
    img: '/flashlight.jpg',
    desc: 'A really great flashlight',
    price: 100,
    currency: 'usd',
  },
  2: {
    product: 'Tin can',
    img: '/tin_can.jpg',
    desc: 'Pretty much what you would expect from a tin can',
    price: 32,
    currency: 'usd',
  },
  3: {
    product: 'Cardboard Box',
    img: '/cardboard_box.png',
    desc: 'It holds things',
    price: 5,
    currency: 'usd',
  },
};

export default (state = initialState) => state;
