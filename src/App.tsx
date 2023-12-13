import './App.css'
import Title from './components/Title/Title';
import { Form } from './components/Form/Form';
import { ElementsList } from './components/ElementsList/ElementsList';
import { useItems } from './hooks/useItems';
import { Item } from './commons/Interfaces';
function App() {

  const { items, setItems, createHandleRemoveItem } = useItems();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget;
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value
    }

    setItems((prevItems: Item[]) => {
      return [...prevItems, newItem]
    })

    input.value = '';
  }

  return (
    <main>
      <aside>
        <Title text="Prueba técnica de React" />
        <Title text="Añadir y eliminar elementos de una lista" size="20px" />
        <Form handleSubmit={(e) => handleSubmit(e)} />
      </aside>
      <section>
        <Title text="Lista de elementos" size="20px" />
        <ElementsList items={items} createHandleRemoveItem={createHandleRemoveItem} />
      </section>
    </main>
  )
}

export default App
