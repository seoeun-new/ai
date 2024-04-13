import styled from "@emotion/styled/macro";

import * as s from "./common";

export const TxtGuide = `
	.txt-guide{ color:#111111;font-size:1.8rem;
		letter-spacing:-0.03em;
		+ *{margin-top:2.4rem;}
		~ .txt-guide{margin-top:4.8rem;}
		b{vertical-align:baseline;}
	}
`

export const FormWrap = styled.div`
	 > * ~ *{margin-top:1.6rem;}
	.input-wrap{display:flex;align-items:center;flex-wrap:wrap;
		.input{flex:1;overflow:hidden;}
		.btn-certify{display:flex;justify-content:center;align-items:center; height:4.8rem; line-height:4.5rem; border-radius:1rem;border:1px solid ${s.c.primary};width:8.4rem; color:${s.c.primary};font-size:1.6rem;font-weight:500;margin-left:0.8rem;
			&:disabled{border-color: #D4D6E3; color:#D4D6E3;}
		}	
	}
	.txt-inp-error{width:100%; color:${ s.c.red };font-size:1.2rem;margin-top:0.8rem;}
`;

export const Thumbnail = styled.div`
	.img-wrap {position:relative; width:7.2rem;height:7.2rem;}
	.img-wrap .upload{position: relative;display:block;overflow:hidden; width:100%;height:100%;position:relative;z-index:1;}
	.img-wrap .upload input{position:absolute;top:0;left:0;width:100%;height:100%;z-index: 1;opacity: 0;cursor:pointer;}
	.img-wrap .img{position: absolute;top:0;left:0; overflow:hidden;width:100%;height:100%;border:1px solid #D9D9D9;background:#fff;border-radius:0.8rem;background:url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.2899 5.65198H5.96607C4.42108 5.65198 3.1665 6.90655 3.1665 8.45154V27.2005C3.1665 28.7455 4.42108 30.0001 5.96607 30.0001H24.715C26.26 30.0001 27.5146 28.7455 27.5146 27.2005V12.6219H25.7721V27.1889V27.2005C25.7721 27.7813 25.2959 28.2576 24.715 28.2576H5.96607C5.38525 28.2576 4.90897 27.7813 4.90897 27.2005V8.43993C4.90897 7.8591 5.38525 7.38283 5.96607 7.38283H20.2899V5.65198Z' fill='%23666666'/%3E%3Cpath d='M20.2192 20.3117C18.9879 20.242 17.7682 20.6602 16.6298 21.5314C15.8747 20.5789 14.957 19.8586 13.8767 19.394C10.5427 17.9652 6.96486 19.5102 6.81385 19.5682L6.02393 19.9167L6.72091 21.5082L7.52245 21.1597C7.52245 21.1597 10.5776 19.8586 13.2145 20.9971C14.7014 21.636 15.8166 22.9486 16.5368 24.9002L16.8388 25.725L18.4768 25.1325L18.1747 24.3194C18.0005 23.8431 17.803 23.4133 17.5939 23.0067C18.4187 22.3446 19.2551 22.0077 20.1147 22.0658C21.6829 22.1587 22.8446 23.4597 22.8794 23.4946L23.4486 24.1567L24.7729 23.0299L24.2037 22.3678C24.134 22.2865 22.5774 20.4859 20.2425 20.3349L20.2192 20.3117Z' fill='%23666666'/%3E%3Cpath d='M19.2553 17.0009C21.1372 17.0009 22.6706 15.4675 22.6706 13.5856C22.6706 11.7038 21.1372 10.1704 19.2553 10.1704C17.3735 10.1704 15.8401 11.7038 15.8401 13.5856C15.8401 15.4675 17.3735 17.0009 19.2553 17.0009ZM19.2553 11.9129C20.173 11.9129 20.9281 12.6679 20.9281 13.5856C20.9281 14.5033 20.173 15.2584 19.2553 15.2584C18.3376 15.2584 17.5826 14.5033 17.5826 13.5856C17.5826 12.6679 18.3376 11.9129 19.2553 11.9129Z' fill='%23666666'/%3E%3Cpath d='M31.0112 5.47781H27.6889V2.16711H25.9465V5.47781H22.6125V7.22027H25.9465V10.531H27.6889V7.22027H31.0112V5.47781Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 3.2rem;}
	.img-wrap .img:not(:empty){z-index: 2;background:#fff;}
	.img-wrap .btn-del{position:absolute;top:-0.5rem;right:-0.5rem;width:2rem;height:2rem;background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z' fill='%23505050'/%3E%3Cpath d='M13 6.99902L7 12.999' stroke='white'/%3E%3Cpath d='M13 13L7 7' stroke='white'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;z-index: 3;}
	.img-wrap .img img{position: absolute; top: 0; left: 0;  width: 100%; height: 100%; object-fit: contain;}
	.img-wrap .img:empty ~ .btn-del{display:none;}
`;

export const UploadPhoto = styled.div`
display:flex;align-items:center;position:relative;
.img-wrap {position:relative; width:7.2rem;height:7.2rem;}
.img-wrap .upload{position: relative;display:block;overflow:hidden; width:100%;height:100%;position:relative;z-index:1;}
.img-wrap .upload input{position:absolute;top:0;left:0;width:100%;height:100%;z-index: 1;opacity: 0;cursor:pointer;}
.img-wrap .img{display:flex;justify-content:center;align-items:center;flex-direction: column; position: absolute;top:0;left:0; overflow:hidden;width:100%;height:100%;border:1px solid #D9D9D9;background:#fff;border-radius:0.8rem;}
.img-wrap .img:before{content:'';display:block;width:3.2rem;height:3.2rem;background:url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.2899 5.65198H5.96607C4.42108 5.65198 3.1665 6.90655 3.1665 8.45154V27.2005C3.1665 28.7455 4.42108 30.0001 5.96607 30.0001H24.715C26.26 30.0001 27.5146 28.7455 27.5146 27.2005V12.6219H25.7721V27.1889V27.2005C25.7721 27.7813 25.2959 28.2576 24.715 28.2576H5.96607C5.38525 28.2576 4.90897 27.7813 4.90897 27.2005V8.43993C4.90897 7.8591 5.38525 7.38283 5.96607 7.38283H20.2899V5.65198Z' fill='%23666666'/%3E%3Cpath d='M20.2192 20.3117C18.9879 20.242 17.7682 20.6602 16.6298 21.5314C15.8747 20.5789 14.957 19.8586 13.8767 19.394C10.5427 17.9652 6.96486 19.5102 6.81385 19.5682L6.02393 19.9167L6.72091 21.5082L7.52245 21.1597C7.52245 21.1597 10.5776 19.8586 13.2145 20.9971C14.7014 21.636 15.8166 22.9486 16.5368 24.9002L16.8388 25.725L18.4768 25.1325L18.1747 24.3194C18.0005 23.8431 17.803 23.4133 17.5939 23.0067C18.4187 22.3446 19.2551 22.0077 20.1147 22.0658C21.6829 22.1587 22.8446 23.4597 22.8794 23.4946L23.4486 24.1567L24.7729 23.0299L24.2037 22.3678C24.134 22.2865 22.5774 20.4859 20.2425 20.3349L20.2192 20.3117Z' fill='%23666666'/%3E%3Cpath d='M19.2553 17.0009C21.1372 17.0009 22.6706 15.4675 22.6706 13.5856C22.6706 11.7038 21.1372 10.1704 19.2553 10.1704C17.3735 10.1704 15.8401 11.7038 15.8401 13.5856C15.8401 15.4675 17.3735 17.0009 19.2553 17.0009ZM19.2553 11.9129C20.173 11.9129 20.9281 12.6679 20.9281 13.5856C20.9281 14.5033 20.173 15.2584 19.2553 15.2584C18.3376 15.2584 17.5826 14.5033 17.5826 13.5856C17.5826 12.6679 18.3376 11.9129 19.2553 11.9129Z' fill='%23666666'/%3E%3Cpath d='M31.0112 5.47781H27.6889V2.16711H25.9465V5.47781H22.6125V7.22027H25.9465V10.531H27.6889V7.22027H31.0112V5.47781Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 100%;}
.img-wrap .img span{ color:#666;font-size:1.2rem;display:block;text-align:center;margin-top:0.4rem;}
.img-wrap .img span em{ color:${ s.c.primary };vertical-align:baseline;}
.photo-list {flex:1;overflow:hidden;padding:0 1.2rem;}
.photo-list .swiper-wrapper{display:flex;align-items:center;padding:1rem 0;}
.photo-list .swiper-wrapper::-webkit-scrollbar{display:none;}
.photo-list .swiper-wrapper .swiper-slide {position:relative;width:8rem;height:7.2rem;min-width:7.2rem;}
.photo-list .swiper-wrapper .swiper-slide ~ .swiper-slide{margin-left:1.2rem;}
.photo-list .swiper-wrapper .swiper-slide .btn-del {position:absolute;top:-0.5rem;right:-0.3rem;width:2rem;height:2rem;background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z' fill='%23505050'/%3E%3Cpath d='M13 6.99902L7 12.999' stroke='white'/%3E%3Cpath d='M13 13L7 7' stroke='white'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;z-index: 3;}
.photo-list .swiper-wrapper .swiper-slide .img {width:100%;height:100%;position:relative;overflow:hidden;border-radius:0.6rem;overflow:hidden;border:1px solid #D9D9D9;}
.photo-list .swiper-wrapper .swiper-slide .img img{position: absolute; top: 0; left:0;width: 100%; height: 100%; object-fit: contain; margin: auto;}

`;

export const UploadFiles = styled.div`
	.upload {display:block; position:relative;width:100%; height:4.8rem;border:1px solid #D9D9D9;border-radius:1rem;padding:0 1.6rem;background:#fff url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%;background-size:auto 2.4rem;}
	.upload .placeholder{ color:#A0A4BE;font-size: 1.6rem; display:flex;align-items:center;height:100%;}
	.upload input {position: absolute;width:100%;height:100%;opacity: 0;top:0;left:0;}
`;

export const FileList = styled.div`
ul {margin-top: 0.8rem;
  li { display: flex; align-items: center; height: 4rem; border: 1px solid #D9D9D9; border-radius: 1rem; color: #767676; font-size: 1.4rem;
    ~ li { margin-top: 0.8rem; }
    .ico-clip{margin-left: 1.6rem; 
			+ .filename {margin-left:0.5rem}
		}
    .filename { display: flex; align-items: center; margin-left: 1.6rem; }
    .right { margin-left: auto; display: flex; align-items: center;
      .btn-del { width: 4rem; height: 4rem; background: url("data:image/svg+xml,%3Csvg width='9' height='10' viewBox='0 0 9 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.58114 1L0.581177 8.94467' stroke='%23505050'/%3E%3Cpath d='M8.58118 9.00122L0.581217 1.00122' stroke='%23505050'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 0.8rem; }
    }
  }
}
.total-byte { font-size: 1.4rem; margin-top: 0.7rem; text-align: right; }

`;


export const BannerProfile = styled.div`
> *{background:#f5f6fa;border-radius:1rem;padding:1.6rem 2.7rem;font-size:1.6rem; display:flex;align-items:center;width:100%;border:1px solid transparent;
	&.on,
	&:focus{border-color: ${ s.c.primary };}
}
	&.st2 > *{background:#fff;}
	.cls-default {display:inline-block;width:2.4rem;height:2.4rem;margin-right:0.8rem; background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.23 22C5.71536 22 1.22998 17.5146 1.22998 12C1.22998 6.48538 5.71536 2 11.23 2C16.7446 2 21.23 6.48538 21.23 12C21.23 17.5146 16.7446 22 11.23 22ZM11.23 3.62514C6.6146 3.62514 2.85512 7.38462 2.85512 12C2.85512 16.6154 6.6146 20.3749 11.23 20.3749C15.8454 20.3749 19.6049 16.6154 19.6049 12C19.6049 7.38462 15.8454 3.62514 11.23 3.62514Z' fill='%23383838'/%3E%3Cpath d='M11.425 17.8071C9.99484 17.8071 8.7164 17.3088 7.9905 16.8537C7.6113 16.6154 7.49213 16.117 7.73048 15.7378C7.96884 15.3586 8.46721 15.2394 8.84641 15.4778C8.97642 15.5645 11.7067 17.1788 13.9927 15.2503C14.3394 14.9686 14.8486 15.0011 15.1411 15.3478C15.4336 15.6945 15.3903 16.2037 15.0436 16.4962C13.8843 17.4713 12.6059 17.8071 11.4358 17.8071H11.425Z' fill='%23383838'/%3E%3Cpath d='M13.6244 10.7541H8.359C7.06972 10.7541 6.0188 9.70318 6.0188 8.4139V3.62517L7.64394 3.33264V8.40307C7.64394 8.7931 7.95813 9.11813 8.359 9.11813H13.6244C14.0145 9.11813 14.3395 8.7931 14.3395 8.40307V3.33264H15.9646V8.40307C15.9646 9.69235 14.9137 10.7433 13.6244 10.7433V10.7541Z' fill='%23383838'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M8.57566 20.6673L2.57349 16.0411L2.69266 8.08878L8.57566 3.34338V20.6673Z' fill='%23383838'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
	.img {width:4rem;height:4rem;position:relative;margin-right:1rem;display:flex;justify-content:center;align-items:center;
		img {position: absolute;object-fit: contain;max-width: 100%;max-height: 100%;}
	}
	.name {font-weight:500;padding-left:1.6rem;margin-left:1.6rem;position:relative;
		&:before{content:'';display:block;position:absolute;top:50%;left:0; width:0.1rem;height:1.3rem;background:#D9D9D9;transform:translateY(-50%);}
	}
`;


export const DashboardBox = styled.div`
	margin-top: 1rem;
	ul { display: flex; align-items: center; background: ${ s.c.primary }; border-radius: 1rem; box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.2); color: #fff; padding: 1.3rem 0;
		li { flex: 1; position: relative; display: flex; justify-content: center; align-items: center; flex-direction: column; justify-content: space-between;
			~ li:before { content: ''; display: block; position: absolute; top: 50%; left: 0; height: 3rem; width: 0.1rem; background: rgba(255, 255, 255, 0.2); transform: translateY(-50%); }
			em { font-weight: 700; font-size: 1.2rem; 
				[class*=ico-dashboard]{ width: 1.6rem; height: 1.6rem; margin-right: 0.4rem;vertical-align: middle;}
			}
			b { font-weight: 700; font-size: 2rem; }
			span {
				font-weight: 500;
				font-size: 1.4rem;
				color: rgba(255, 255, 255, 0.4);
			}
		}
	}

	&.st2{
		ul{padding:1.5rem 0;
			li ~ li:before{top:initial;bottom:0.5rem;transform:translateY(0);height:2.8rem;}
			li b{margin-top:1rem;line-height:1;margin-bottom:1rem;}
		}
	}

`;


export const DataTable = styled.div`
	&.data-type1{border-radius:1rem;border:1px solid #ECEEF5;padding:0 1.5rem;background:#fff;}
	&.data-type1 table {width:100%;}
	&.data-type1 table th,
	&.data-type1 table td{height:5.5rem;text-align:center;vertical-align: middle;}
	&.data-type1 table th {font-size:1.6rem; color:#999999;}
	&.data-type1 table td {border-top:1px solid #ECEEF5;font-size:1.6rem;font-weight:500; color:#383838;}
	&.data-type1 table td .c-red { color:#DC0000;}
`;

export const ListBox = styled.div`
  border: 1px solid #E9EAED; border-radius: 1rem; background: #fff;
  ul {
    font-size: 1.6rem;

    li { display: flex; align-items: center; height: 5.6rem; padding: 0 1.6rem;
      ~ li { border-top: 1px solid #EEEEEE; }
      .right { margin-left: auto; font-weight: 500; }
    }
  }

`;

export const SelectPicker = styled.div`
	display:flex;background:#f6f6f6;
	padding: 1rem 0;
	.swiper{height:15rem;overflow:hidden;
		.swiper-wrapper{width:100%;}
		.swiper-slide{display:flex;align-items: center; justify-content: center;padding: 0 1rem;white-space:nowrap;color:#aaa;
			&.swiper-slide-active{ color:#111;}
		}
		&.days{flex:1;}
		&.ampm{width:20%;}
		&.hours{width:20%;}
		&.times{width:20%;}		
	}
`;

export const TeacherList = styled.div`
  .tit { font-size: 1.6rem; margin-bottom: 1.8rem; display: flex;
    align-items: center;
    .ico-teacher { margin-right: 0.8rem; }
  }

  ul li { height: 5.6rem; display: flex; align-items: center; padding: 0 1.6rem; font-size: 1.6rem; background: #fff; border: 1px solid #EEEEEE;border-radius:1rem;
    ~ li { margin-top: 0.8rem; }
    .name { margin-left: auto; 
			em { font-size: 1.4rem; margin-left: 0.1rem; vertical-align:baseline;}
		}
  }

`;

export const SelectBox = styled.div`
		background: #fff; border: 0.1rem solid #EEEEEE; padding: 2rem 1.6rem; border-radius: 1rem;
		.tit { display: block; font-size: 1.8rem; font-weight: 700; }
		ul { margin-top: 2rem;

			li { 
				display:flex;align-items:center;
				~ li { margin-top: 2.5rem; }
				.inp-radio .t { font-size: 1.6rem; padding-left: 1.5rem; }
				.btn-time{margin-left:auto;margin-right:-0.5rem; letter-spacing:-0.02em; font-size:1.4rem;color:${s.c.primary};padding-right:2.5rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7L15 12L10 17' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 100% 50%;background-size:auto 2.4rem; 
					> * ~ *{padding-left:0.5rem;}
					.ampm{font-size:1.2rem;
						+ .time{padding-left:0.2rem;}
					}
					
				}
			}
		}
`;

export const NoticeBox = styled.div`
  background: #fff; border: 0.1rem solid #EEEEEE; padding: 2rem 1.6rem; border-radius: 1rem;

  .tit {position: relative; display: block; font-size: 1.8rem; font-weight: 700; display: flex; align-items: center; margin-bottom: 1rem;
    &:before { content: ''; display: inline-block; margin-right: 0.4rem; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_176_15707)'%3E%3Cpath d='M7.87986 2.48999C4.82986 2.48999 2.35986 4.95999 2.35986 8.00999C2.35986 11.06 4.82986 13.53 7.87986 13.53C10.9299 13.53 13.3999 11.06 13.3999 8.00999C13.3999 4.95999 10.9299 2.48999 7.87986 2.48999ZM7.87986 11.25C7.46986 11.25 7.12986 10.91 7.12986 10.5C7.12986 10.09 7.46986 9.74999 7.87986 9.74999C8.28986 9.74999 8.62986 10.09 8.62986 10.5C8.62986 10.91 8.28986 11.25 7.87986 11.25ZM8.62986 9.10999H7.12986V4.75999H8.62986V9.10999Z' fill='%23666666'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_176_15707'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
  }

  .text p { color: #666; font-size: 1.4rem;
    ~ p { margin-top: 1rem; }
  }

`;

export const RepleList = styled.div`
  .tit {
    font-size: 1.6rem;
    display: block;

    b { font-weight: 700; }
    em { color: ${s.c.primary}; }
  }

  .reple-list li { margin-top: 1.2rem;
    .reple { position: relative; padding: 1.5rem 1.6rem; background: #fff; border-radius: 1rem;
      .btn-dot-menu2 { position: absolute; top: 0.5rem; right: 1rem; }

      .thumb { position: relative; width: 3.2rem; height: 3.2rem; border-radius: 100%; overflow: hidden; margin-right: 1rem;
        img { position: absolute; object-fit: contain; max-width: 100%; max-height: 100%; }
      }

      .desc { display: flex; align-items: center;
        b { font-weight: 500; color: #383838; font-size: 1.6rem; display: block; line-height: 1; }

        .date { font-size: 1.2rem; color: #999999;
          span ~ span { margin-left: 0.5rem; }
        }
      }

      .text { margin-top: 1.3rem;\
        em { color: ${s.c.primary}; }

        &.text-delete { color: #999999; }
      }
      .input-reple { margin-top: 1.3rem; border: 1px solid #eee; padding: 1rem; font-size: 1.4rem; }
    }
  }

`;

export const RepleInput = styled.div`
	display:flex;justify-content:center;align-items:center;padding-left:1rem; height:5.6rem;position:fixed;bottom:0;width:100%;background:#fff;z-index: 10;max-width: 475px;background:#fff;transition: bottom 0.5s ease;
	.input{background:#fff;border:none !important;width:100%;}
	.btn-send{height:5.6rem;width:5.6rem;background:url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_198_2963)'%3E%3Cpath d='M3.04004 4.42005V13.5201C3.04004 14.21 3.60004 14.7701 4.29004 14.7701H14.54C15.23 14.7701 15.79 15.3301 15.79 16.0201C15.79 16.71 15.23 17.2701 14.54 17.2701H4.29004C3.60004 17.2701 3.04004 17.8301 3.04004 18.5201V27.57C3.04004 28.51 4.03004 29.1101 4.86004 28.6901L28.27 16.7701C29.2 16.3 29.18 14.97 28.24 14.5201L4.84004 3.28005C4.01004 2.88005 3.04004 3.49005 3.04004 4.41005V4.42005Z' fill='%234252E2'/%3E%3Cmask id='mask0_198_2963' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='3' y='3' width='26' height='26'%3E%3Cpath d='M3.04004 4.42005V13.5201C3.04004 14.21 3.60004 14.7701 4.29004 14.7701H14.54C15.23 14.7701 15.79 15.3301 15.79 16.0201C15.79 16.71 15.23 17.2701 14.54 17.2701H4.29004C3.60004 17.2701 3.04004 17.8301 3.04004 18.5201V27.57C3.04004 28.51 4.03004 29.1101 4.86004 28.6901L28.27 16.7701C29.2 16.3 29.18 14.97 28.24 14.5201L4.84004 3.28005C4.01004 2.88005 3.04004 3.49005 3.04004 4.41005V4.42005Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_198_2963)'%3E%3Cpath opacity='0.1' d='M10.82 2.66003H3.04004V28.84H10.82V2.66003Z' fill='black'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_198_2963'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 3rem;}
`;

export const LinkMenuList = styled.ul`
	li ~ li{margin-top:0.8rem;}
	li button,
	li a {width:100%; height:5.6rem;padding:0 1.6rem;display:flex;align-items:center;border-radius:1rem;border:0.1rem solid #ECEEF5;font-size:1.6rem; background:#fff url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 4L17 12L9 20' stroke='%23BDC0D2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%;background-size:auto 2.4rem;}
`;

