import { formatBytes } from '@/shared/utils/ui'
import { UploadPhotos } from './uploadphotos.style'
import { Swiper, SwiperSlide } from 'swiper/react';

const _ = ({ title, photos, max, total, onChange }: any) => {
	let imageUrlLists = [...photos];

  const handleAddImages = (event:any) => {
    let imageLists = event.target.files;
    let selectedPhotoNum = imageLists.length + imageUrlLists.length;

    if(selectedPhotoNum > total) {
      alert(`최대 ${total}개까지 업로드 가능합니다.`);
      return;
    }
    for (let i = 0; i < imageLists.length; i++) {
      if (imageLists[i].size <= max) {
        const reader = new FileReader();
        reader.readAsDataURL(imageLists[i]);
        reader.onload = () => {
          imageUrlLists.push(reader.result);
          onChange(imageUrlLists);
        }; 
      }else{
        alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`);
      }
    }
  };
  const handleDeleteImage = (id:any) => {
    onChange(photos.filter((_:any, index:any) => index !== id));
  };
	return (
		<UploadPhotos className='photo-upload-list'>
      {title ?  <b className='tit'>사진첨부</b> : null}
      <div className='img-wrap'>
        <label className='upload' htmlFor='photos' onChange={handleAddImages}>
        <input type='file' multiple />
        </label>
        <div className='img'><span><em>{imageUrlLists.length}</em>/{total}</span></div>
      </div>

      <div className='photo-list'>
          <Swiper
            spaceBetween={0}
            slidesPerView={'auto'}
          >
          {photos.map((image:any, id:any) => (
            <SwiperSlide key={id}>
              <button type='button' className='btn-del' onClick={() => handleDeleteImage(id)}></button>
              <div className='img'><img src={image} alt={`${image}-${id}`} /></div>            
            </SwiperSlide>
          ))}      
          </Swiper>
      </div>
    </UploadPhotos>
	)
}

export default _
