import styled from 'styled-components'
import { DateText, SelectBox, ViewDetail, FormWrap, BannerProfile, Thumb, AlbumList } from '@/shared'

export const Contents = styled.div`

${DateText}
${SelectBox}
${ViewDetail}
${FormWrap}
${BannerProfile}
${AlbumList}


background:#F5F6FA;
.days-album-wrap {
  padding: 2.4rem 0;
  .date-text { margin-bottom: 1.6rem; }

  .photo-list-box {
    background: #fff; border-radius: 1rem;
    ~ .photo-list-box { margin-top: 1.6rem; }
    .info {
      display: flex; align-items: center; height: 5.7rem; font-size: 1.6rem; padding: 0 1.6rem;

      .teacher-name {
        margin-left: auto;
        b{font-weight:500;}
        span { font-size: 1.4rem; }
      }
    }

    ul li {
      padding: 1.2rem 1.6rem; border-top: 0.1rem solid #ECEEF5; display: flex; align-items: center;
      .link {
        display: flex; align-items: center;

        .thumb { width: 5.6rem; height: 5.6rem; margin-right: 1.6rem;${Thumb} border-radius:1rem;}

        .text { font-size: 1.6rem; font-weight: 500; }
      }
    }
  }
}

.album-write {
  padding: 2.4rem 0;
  .form-wrap {
    .input, 
		.textarea { background: #fff; border: 1px solid #D4D6E3; }
  }
  .analyze-upload-list { margin-top: 2.4rem; }
  .btn-wrap { margin-top: 3.2rem; }
}

.album-view {
  padding: 2.4rem 0;
  .text { margin-top: 2.4rem; color: #505050; font-size: 1.6rem; }
}


`
export default Contents