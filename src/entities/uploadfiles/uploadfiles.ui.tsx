import { formatBytes } from '@/shared/utils/ui'
import { UploadFiles } from './uploadfiles.style'
import { useState } from 'react';

const _ = ({ files, max, onChange }: any) => {
	
  const [totalSize, setTotalSize] = useState(0);

  const handleAddFiles = (event:any) => {
     const fileLists = event.target.files;
     let fileUrlLists = [...files];
 
     for (let i = 0; i < fileLists.length; i++) {
       if (fileLists[i].size <= max) {
         fileUrlLists.push({'path':fileLists[i].name, 'size':fileLists[i].size});
         onChange(fileUrlLists);
         setTotalSize((prev)=>{ return prev + fileLists[i].size})
 
       }else{
         alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`);
       }
     }
   };
   const handleDeleteFile = (id:any) => {
     let selected = files.filter((_:any, index:any) => index === id)[0].size;
     onChange(files.filter((_:any, index:any) => index !== id));
     setTotalSize((prev)=>{ return prev - selected})
   };
 
	return (
		<UploadFiles>
      <label className="upload" onChange={handleAddFiles}>
        <span className="placeholder">파일첨부</span>
        <input type="file" multiple />
      </label>
      <div className="file-list">
        <ul>
          {files.map((file:any, id:any) => (
            <li key={id}>
              <span className="filename">{file.path}</span>
              <div className="right">
                <span className="byte">{formatBytes(file.size)}</span>
                <button type="button" className="btn-del" onClick={() => handleDeleteFile(id)}></button>
              </div>
            </li>
          ))}   
        </ul>
        {totalSize > 0 ? <div className="total-byte">합계용량/{formatBytes(totalSize)}</div> : null}
      </div>
    </UploadFiles>
	)
}

export default _
