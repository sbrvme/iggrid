import { createSignal, Show, type Component } from 'solid-js';

import styles from './App.module.css';

const GridItem: Component = () => {
  const [isImageVisible, setIsImageVisible] = createSignal(false)
  const [dragPos, setDragPos] = createSignal({x: 0, y: 0});
  const [isDraggable, setIsDraggable] = createSignal(false)
  let inputRef:HTMLInputElement|undefined;
  let imgRef:HTMLImageElement|undefined;
  const pickFile = ()=>{
    if(inputRef!==undefined) inputRef.click()
  }

  
  const changeBackground= ()=>{
    if(inputRef===undefined) return
    if( inputRef.files && inputRef.files[0]){
    setIsImageVisible(true)
    if(imgRef===undefined) return
    imgRef.src=URL.createObjectURL(inputRef.files[0])
    }
  }

  // const onMouseDownHandler= (e: MouseEvent)=>{
  //   setIsDraggable(true)
  //   document.addEventListener('mousemove',onMoveHandler)
  // }

  // const onMouseUpHandler= (e: MouseEvent)=>{
  //   setIsDraggable(false)
  //   console.log("up")
  //   document.removeEventListener('mousemove',onMoveHandler)
  // }
  
  // const onMoveHandler= (e: MouseEvent)=>{
  //   console.log("dragg")
  //   setDragPos({
  //     x: e.clientX,
  //     y: e.clientY
  //   });
  // }

  // document.addEventListener("mouseup",()=>{
  //   document.removeEventListener("mousemove",onMouseUpHandler)
  // })

  
  return (
        <div class={styles.gridItem}
          onClick={pickFile}
          // onMouseDown={onMouseDownHandler}
          // onMouseUp={onMouseUpHandler}
          >
          <Show when={isImageVisible()}>
            <img ref={imgRef} src="#" alt="a"/>
          </Show>
          <input ref={inputRef} type="file" class={styles.inputHidden} name="avatar" accept="image/png, image/jpeg" onChange={changeBackground}/>
        </div>
  );
};

export default GridItem;
