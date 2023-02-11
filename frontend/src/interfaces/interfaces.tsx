import { MouseEvent } from 'react'

export interface IFiles{
  name: string,
  dir: boolean,
  size: number
}

export interface IData{
  path: string, 
  files: Array<IFiles>
}

export interface IFileList{
  data:IData,
  parent:string,
  ClickHandler(event: MouseEvent):void
}
