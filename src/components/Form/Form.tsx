import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton'
import { styles } from './styles'
interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
export const Form = ({ handleSubmit }: Props) => {
  return (
    <form style={styles.container as any} onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
      <label style={styles.inputContainer}>
        Elemento a introducir:
        <input
          style={styles.input}
          name="item"
          required
          type="text"
          placeholder="Agregue un elemento"
        />
      </label>
      <CustomButton text="Añadir elemento" />
    </form>
  )
}
