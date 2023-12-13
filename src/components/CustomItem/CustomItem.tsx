import { Item, ItemId } from '../../commons/Interfaces'
import { colors } from '../../commons/colors'
import { CustomButton } from '../CustomButton/CustomButton'
import { styles } from './styles'

interface Props {
  el: Item
  createHandleRemoveItem: (id: ItemId) => () => void
}
const CustomItem = ({ el, createHandleRemoveItem }: Props) => {
  return (
    <li style={styles}>
      {el.text}
      <CustomButton
        text="Eliminar"
        bg={colors.customRed}
        onClick={createHandleRemoveItem(el.id)} />
    </li>
  )
}

export default CustomItem