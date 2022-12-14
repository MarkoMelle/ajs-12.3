import Cart from '../service/Cart'
import Book from '../domain/Book'
import MusicAlbum from '../domain/MusicAlbum'
import Gadgets from '../domain/Gadgets'

test('should', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
  cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Gadgets(1007, 'Iphone', 'Apple', 200)
  ])
  cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Gadgets(1007, 'Iphone', 'Apple', 400, 2),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)
  ])
  cart.remove(new Gadgets(1007, 'Iphone', 'Apple', 200))
  cart.remove(new Gadgets(1007, 'Iphone', 'Apple', 200))
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Gadgets(1007, 'Iphone', 'Apple', 200),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)
  ])
})
