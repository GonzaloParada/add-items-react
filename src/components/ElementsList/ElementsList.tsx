import { ItemId, Item } from '../../commons/Interfaces'
import CustomItem from '../CustomItem/CustomItem'
import Title from '../Title/Title'
import { styles } from './styles'

interface Props {
  items: Item[]
  createHandleRemoveItem: (id: ItemId) => () => void
}
export const ElementsList = ({ items, createHandleRemoveItem }: Props) => {
  return (
    items.length === 0 ? (
      <p>
        <Title text="No hay elementos en la lista" size="15px" />
      </p>
    ) : (
      <ul >
        {
          items.map(el => (<CustomItem key={el.id} el={el} createHandleRemoveItem={createHandleRemoveItem} />))
        }
      </ul>
    )
  )
}
