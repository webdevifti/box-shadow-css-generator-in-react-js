import React, { useState } from 'react';
import './App.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
function App() {
  const [ Hori, setHori ] = useState(10)
  const [ Veri, setVeri ] = useState(10)
  const [ Blur, setBlur ] = useState(10)
  const [ Color, setColor ] = useState('#000')
  const [ CheckOn, setCheckOn ] = useState(false)
  const [ borderRadius, setBorderRadius ] = useState(0)

  // Copy State
  const [ isCopied, setIsCopied ] = useState(false);

  // Get The CSS Properties
  const codeSnippet = `
    box-shadow: ${CheckOn ? 'inset': ''} ${Hori}px ${Veri}px ${Blur}px ${Color};
     border-radius: ${borderRadius}%;
  `;

  // Copy the CSS Properties into your Clipboard
  const oncopyTxt = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      <h3 className="title">Box Shadow and Border Radius CSS Generator</h3>
      <div className="App">
        
        <div className="controls">
            <label>Horizontal Length</label>
            <input type="range" min="-200" max="200" value={Hori} onChange={ (e) => setHori(e.target.value) } />

            <label>Vertical Length</label>
            <input type="range" min="-200" max="200" value={Veri} onChange={ (e) => setVeri(e.target.value) } />

            <label>Blur</label>
            <input type="range" min="0" max="200" value={Blur} onChange={ (e) => setBlur(e.target.value) } />

          

            <label>Border Radius</label>
            <input type="range" value={borderRadius} onChange={ (e) => setBorderRadius(e.target.value) } />
            <label>Color</label>
            <input type="color" value={Color} onChange={ (e) => setColor(e.target.value) } />

            <div className="switch">
              <label>Outline
                <input type="checkbox" checked={CheckOn} onChange={() => setCheckOn(!CheckOn)} />
                <span className="lever"></span>
                Inset
              </label>
            </div>

        </div>
        <div className="output">
          <div className="box" style={{ boxShadow: `${CheckOn ? 'inset': ''} ${Hori}px ${Veri}px ${Blur}px ${Color}`, borderRadius: `${borderRadius}%` }} >

            <p>{codeSnippet}</p>
           
          </div>
          <CopyToClipboard text={codeSnippet} onCopy={oncopyTxt} >
            <span className="btn-copy">{ isCopied ? "Copied" : "Copy CSS" }</span>
          </CopyToClipboard>
          
        </div>
      </div>
    </>
  );
}

export default App;
