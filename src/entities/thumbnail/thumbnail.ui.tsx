import { formatBytes } from '@/shared/utils/ui'
import { Thumbnail } from './thumbnail.style'

const _ = ({ thumb, max, onChange }:any) => {  
  const handleAddImages = (event:any) => {
      const img = event.target.files[0];
    
      if (img.size > max) {
        alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`);
        return;
      }
      
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        onChange(reader.result);
      };
  };
  const handleDeleteImage = (id:any) => {
    onChange('');
  };  
  return (
    <Thumbnail className="thumbnail">
        <div className="img-wrap">
          <label className="upload" htmlFor="photo">
            <input type="file" name="photo" accept=".png, .jpeg, .jpg" onChange={handleAddImages} />
          </label>
          <div className="img">
            {thumb ? <img src={thumb}  alt="이미지 업로드" /> : null}
          </div>
          <button type="button" className="btn-del" onClick={handleDeleteImage}></button>
        </div>
    </Thumbnail>
  );
}

export default _
