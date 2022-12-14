import Buyable from '../domain/Buyable'
import Gadgets from '../domain/Gadgets'

export default class Cart {
  private readonly _items: Array<Buyable | Gadgets> = []

  add (item: Buyable | Gadgets): void {
    if ((this._items.find(i => i.id === item.id) !== undefined) && item instanceof Gadgets) {
      const search = this._items.find(i => i.id === item.id)
      /* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
      const id: number = this._items.indexOf(search!)
      this._items[id].price += item.price
      this._items[id].amount += 1
    } else {
      this._items.push(item)
    }
  }

  remove (item: Gadgets): void {
    /* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
    if ((this._items.find(i => i.id === item.id) !== undefined) && this._items.find(i => i.id === item.id)!.amount > 1) {
      const search = this._items.find(i => i.id === item.id)
      /* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
      const id: number = this._items.indexOf(search!)
      this._items[id].price = this._items[id].price - item.price
      this._items[id].amount -= 1
    }
  }

  get items (): Buyable[] {
    return [...this._items]
  }
}
