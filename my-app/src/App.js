import React from 'react'
import Image from './img/people.svg'
import './App.css';
import { func } from 'prop-types';

function App() {

  const [comentario, setComentario] = React.useState()
  const [allComments, setAllComments] = React.useState([])

  function CliqueiNoBotao() {
    const AllPrevComment = [...allComments, comentario]
    setAllComments(AllPrevComment)

  }


  function writeText(eventTextarea) {
    setComentario(eventTextarea.target.value)
  }



  return (
    <div >
      <img src={Image} alt="img-pessoas" />
      <textarea placeholder="Seu comentario" onChange ={writeText}></textarea>
      <button onClick={CliqueiNoBotao}>Comentar</button>

    <div >
      <ul id="lista">
        {allComments.map(coment => (
          <li id="lista"  key={coment} >{coment} </li>
      ))
        }
     
      </ul>

      </div>
    </div>

  );
}

export default App;
