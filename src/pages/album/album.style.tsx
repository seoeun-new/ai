import styled from 'styled-components'
import { DateText, SelectBox, ViewDetail, FormWrap, BannerProfile, Thumb } from '@/shared'

export const Contents = styled.div`

${DateText}
${SelectBox}
${ViewDetail}
${FormWrap}
${BannerProfile}


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
        span { font-size: 1.4rem; }
      }
    }

    ul li {
      padding: 1.2rem 0; border-top: 0.1rem solid #ECEEF5; display: flex; align-items: center;
      .link {
        display: flex; align-items: center;

        .thumb { width: 5.6rem; height: 5.6rem; margin-right: 1.6rem;${Thumb} }

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

.album-list {
  display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 0.8rem;

  li .img {
    width: 100%; position: relative;
    &:after { display: block; content: ""; padding-bottom: 100%; }
    img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 0.8rem; }
  }
}



`
export default Contents