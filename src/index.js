import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

// Object
const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array
}

// Stateless component dengan function 
function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  )
}

function FileName({ file }) {
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </>
  )
}


const FileListItem = ({ file }) => (
  // recode from FileList
  <tr className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
  </tr>
)

const CommitMessage = ({commit}) => (
  <td className="commit-message">
    {commit.message}  
  </td>
)

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}


const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2020-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'test',
    type: 'folder',
    updated_at: '2020-10-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'readme',
    type: 'file',
    updated_at: '2020-12-11 21:24:00',
    latestCommit: {
      message: 'Added File'
    }
  }
]

ReactDOM.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>,
  document.getElementById('root')
);

