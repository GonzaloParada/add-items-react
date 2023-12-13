
interface Props {
  text: string
  size?: string
}
const Title = ({ text, size }: Props) => {
  return (

    <h1 style={{ fontSize: size ?? '40px' }} >{text}</h1>
  )
}

export default Title