import React, { ReactElement } from 'react';
import { Link, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import { IFileList } from '../interfaces/interfaces';


const FolderStyle ={
  color:'black', 
  fontSize:20, 
  marginLeft:1, 
  textDecoration: 'none',
  "&:hover":{
    textDecoration:'underline'
  }
}

const FileStyle ={
  color:'black', 
  fontSize:20,
  textDecoration: 'none',
  "&:hover":{
    textDecoration:'underline'
  }
}

const PathStyle={
  display:'flex',
  justifyContent:'space-between',
  padding: 2,
  color:'black', 
  fontSize:22,
}

const UpStyle={
  color:'black', 
  fontSize:25,
  textDecoration: 'none',
  "&:hover":{
    textDecoration:'underline'
  }
}

export function FileList(props: IFileList):ReactElement {
  return (
    <>
      <List sx={{ height:'100%',width: '100%', maxWidth: 700, bgcolor: 'background.paper',border:'2px solid black' }} component="ul" aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="p" sx={{ fontSize: 40, textAlign:'center'}} id="files-list">Files</ListSubheader>
      }>
      <Typography sx={ PathStyle }>
        current folder: {props.data.path === '' ? '/' : props.data.path}
        <Link href={ props.parent } sx={ UpStyle } onClick={ props.ClickHandler }>Up</Link>
      </Typography>
      
        {props.data.files.map((file, index):ReactElement => {
          return ((file.dir) ? 
          (<ListItem key={ index } >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <Link sx={ FolderStyle } href={ props.data.path + '/' + file.name} onClick={ props.ClickHandler }>
              {file.name}
            </Link>
          </ListItem> ) : 
          (<ListItem>
            <ListItemIcon sx={{marginLeft: 1}}>
              <FolderIcon />
            </ListItemIcon>
            <Typography sx={ FileStyle }>
              {file.name}
            </Typography>
          </ListItem>))
        })}
      </List>
    </>
  );
}