import React,{useEffect} from 'react';
import { fabric } from "fabric";
import './App.css';

function App() {
  

  useEffect(() => {
   
    const canvas = new fabric.Canvas("my-fabric-canvas");
  
    fabric.Image.fromURL('https://petcon-s3-public.s3.ap-northeast-2.amazonaws.com/temp/mask.png', img => {
      img.scale(1)
      canvas.add(img)
      canvas.centerObject(img);
    })
    
    fabric.Image.fromURL('https://petcon-s3-public.s3.ap-northeast-2.amazonaws.com/temp/phoneImg.png', img => {
      img.scale(1)
      canvas.add(img)
      canvas.centerObject(img);
      canvas.item(1).selectable = false;
      canvas.item(1).hasControls = false;
      canvas.setOverlayImage(img);
    })

    return () => {
      canvas.dispose();
    };
  }, []);


  return (
    <div className="App">
      <canvas id="my-fabric-canvas" style={{border: "1px solid red", margin:"200px"}} width="400" height="500" />
    </div>
  );
}

export default App;