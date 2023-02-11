import React, { ReactElement,useEffect,useState,MouseEvent} from 'react';
import './App.css';
import { IData } from './interfaces/interfaces';
import { FileList } from './components/FileList'
import { Box } from '@mui/material';

function App():ReactElement {
  const [parent,setParent] = useState<string>('')
  const [data, setData] = useState<IData>({
    path: '',
    files: []
  })

  useEffect(() => {
    fetch('http://localhost:5000')
    .then(res => res.json())
    .then(res => {
      setParent('')
      setData(res)
    })
  },[])

  const ClickHandler = (event: MouseEvent):void => {
    event.preventDefault()
    console.log()
    fetch('http://localhost:5000?path='+ (event.target as HTMLLinkElement).getAttribute('href'))
      .then(res => res.json())
      .then(res => {
        let linkArr = res.path.split('/')
        linkArr.pop()
        setParent(linkArr.join('/'))
        setData(res)
      })
  }
  return (
    <>
      <Box sx={ {display:'flex', justifyContent: 'center',borderTop:'none'} }>
        <FileList data={ data } parent = { parent } ClickHandler = { (event: MouseEvent) => ClickHandler(event) } />  
      </Box>  
    </>
  );
}

export default App;
