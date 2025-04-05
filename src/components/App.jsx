import {  createSignal, For } from 'solid-js';

import styles from './App.module.css';
import GridItem from './GridItem';

const App = () => {
const [itemsStore, setItemsStore] = createSignal([0]);

const addItem = () => {
  setItemsStore([...itemsStore(),0])
}

  return (
    <div class={styles.App}>
      <button onClick={addItem} class={styles.buttonAdd}>ADD</button>
      <div class={styles.pgrid}>
        <For each={itemsStore()} >
          {(_) => <GridItem/>}
        </For>
      </div>
    </div>
  );
};

export default App;
