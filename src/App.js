import { useState } from 'react'
import './App.css'
import ReactHtmlParser from 'react-html-parser'
const marked = require("marked")
// const html = marked('# Marked in Node.js\n\nRendered by **marked**.');

function App() {

  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code,\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`\' && lastLine == '\`\`\`\') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text ****. whoa!
  Or _italic_.
  Or... wait for it... *_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ---------- | ------------- | -------------
  Your content can | be here, anhit | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `);


  const changeHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="App">
      <div className="editor">
        <div className="editorDiv">
          <h4>Editor</h4>
        </div>
        <textarea onChange={changeHandler} className="editor">
          {text}
        </textarea>
      </div>

      <div className="preview">
        <div className="previewDiv">
          <h4>Previewer</h4>
        </div>
        <hr></hr>
        <h1>Preview</h1>
        {ReactHtmlParser(marked(text))}
      </div>
    </div>
  );
}

export default App;
