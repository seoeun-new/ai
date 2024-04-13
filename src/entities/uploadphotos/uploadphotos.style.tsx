import styled from 'styled-components'
import { COLOR } from '@/shared'

export const UploadPhotos = styled.div`
display:flex;align-items:center;position:relative;
.img-wrap {position:relative; width:7.2rem;height:7.2rem;
  .upload{position: relative;display:block;overflow:hidden; width:100%;height:100%;position:relative;z-index:1;}
  .upload input{position:absolute;top:0;left:0;width:100%;height:100%;z-index: 1;opacity: 0;cursor:pointer;}
  .img{display:flex;justify-content:center;align-items:center;flex-direction: column; position: absolute;top:0;left:0; overflow:hidden;width:100%;height:100%;border:0.1rem dashed #BDC0D2;background:#fff;border-radius:0.8rem;}
  .img:before{content:'';display:block;width:3.2rem;height:3.2rem;background:url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.2899 5.65198H5.96607C4.42108 5.65198 3.1665 6.90655 3.1665 8.45154V27.2005C3.1665 28.7455 4.42108 30.0001 5.96607 30.0001H24.715C26.26 30.0001 27.5146 28.7455 27.5146 27.2005V12.6219H25.7721V27.1889V27.2005C25.7721 27.7813 25.2959 28.2576 24.715 28.2576H5.96607C5.38525 28.2576 4.90897 27.7813 4.90897 27.2005V8.43993C4.90897 7.8591 5.38525 7.38283 5.96607 7.38283H20.2899V5.65198Z' fill='%23666666'/%3E%3Cpath d='M20.2192 20.3117C18.9879 20.242 17.7682 20.6602 16.6298 21.5314C15.8747 20.5789 14.957 19.8586 13.8767 19.394C10.5427 17.9652 6.96486 19.5102 6.81385 19.5682L6.02393 19.9167L6.72091 21.5082L7.52245 21.1597C7.52245 21.1597 10.5776 19.8586 13.2145 20.9971C14.7014 21.636 15.8166 22.9486 16.5368 24.9002L16.8388 25.725L18.4768 25.1325L18.1747 24.3194C18.0005 23.8431 17.803 23.4133 17.5939 23.0067C18.4187 22.3446 19.2551 22.0077 20.1147 22.0658C21.6829 22.1587 22.8446 23.4597 22.8794 23.4946L23.4486 24.1567L24.7729 23.0299L24.2037 22.3678C24.134 22.2865 22.5774 20.4859 20.2425 20.3349L20.2192 20.3117Z' fill='%23666666'/%3E%3Cpath d='M19.2553 17.0009C21.1372 17.0009 22.6706 15.4675 22.6706 13.5856C22.6706 11.7038 21.1372 10.1704 19.2553 10.1704C17.3735 10.1704 15.8401 11.7038 15.8401 13.5856C15.8401 15.4675 17.3735 17.0009 19.2553 17.0009ZM19.2553 11.9129C20.173 11.9129 20.9281 12.6679 20.9281 13.5856C20.9281 14.5033 20.173 15.2584 19.2553 15.2584C18.3376 15.2584 17.5826 14.5033 17.5826 13.5856C17.5826 12.6679 18.3376 11.9129 19.2553 11.9129Z' fill='%23666666'/%3E%3Cpath d='M31.0112 5.47781H27.6889V2.16711H25.9465V5.47781H22.6125V7.22027H25.9465V10.531H27.6889V7.22027H31.0112V5.47781Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 100%;}
  .img span{ color:#666;font-size:1.2rem;display:block;text-align:center;margin-top:0.4rem;}
  .img span em{ color:${ COLOR.primary };vertical-align:baseline;}
}
.photo-list {flex:1;overflow:hidden;padding:0 1.2rem;
  .swiper-wrapper{display:flex;align-items:center;padding:1rem 0;}
  .swiper-wrapper::-webkit-scrollbar{display:none;}
  .swiper-wrapper .swiper-slide {position:relative;width:8rem;height:7.2rem;min-width:7.2rem;}
  .swiper-wrapper .swiper-slide ~ .swiper-slide{margin-left:1.2rem;}
  .swiper-wrapper .swiper-slide .btn-del {position:absolute;top:0.5rem;right:0.5rem;width:2rem;height:2rem;border-radius:100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;z-index: 1;}
  .swiper-wrapper .swiper-slide .img {width:100%;height:100%;position:relative;overflow:hidden;border-radius:0.6rem;overflow:hidden;border:1px solid #D9D9D9;}
  .swiper-wrapper .swiper-slide .img img{position: absolute; top: 0; left:0;width: 100%; height: 100%; object-fit: contain; margin: auto;}
}

`
