interface Props {
  text: string
  onClick?: any;
  color?: string,
  bg?: string
}
import { styles } from "./styles";
export const CustomButton = ({ text, onClick, color, bg }: Props) => {
  return (
    <button onClick={onClick} className='btn-primary' style={styles(color, bg)}>{text}</button>
  )
}
