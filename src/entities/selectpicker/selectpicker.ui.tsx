
import { zeroFill } from '@/shared/utils/ui'
import { SelectPicker } from './selectpicker.style'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react'

const _ = ({ data, value, onChange }: any) => {
	const [selected, setSelected] = useState(value);
  const inits:{[key:string]:any} = {
    days: data.days ? data.days : [],
    ampm: ['AM', 'PM'],
    hours: data.hours ? data.hours : Array(24).fill(undefined).map((v, i) => i),
    times:  data.times ? data.times : Array(60).fill(undefined).map((v, i) => v = i)
  };  

  const items = Object.keys(inits).map(item => inits[item])
	const changeValue = (index:any, i:any) =>{ 
    let new_arr = [...selected]; 
    new_arr[index] = items[index][i];
    setSelected(new_arr);
    onChange(new_arr);
   }

   
   useEffect(() => {
    if(selected.length <= 0) {setSelected([items[0][0], items[1][0], items[2][0], items[3][0]])}
  }, [selected, items]);
  

	return (
		<SelectPicker>
        {items.map((item, index) => <Swiper key={`swiper`+ index}
            initialSlide={items[index].indexOf(selected[index])}
            className={`picker`+index}
            direction={'vertical'}
            slidesPerView={5}
            loop={index > 1 ? true : false}
            loopAdditionalSlides={5}
            slideToClickedSlide={true}
            centeredSlides={true}
            onSlideChange={(swiper:any) => changeValue(index, swiper.activeIndex)}
        >
            {items[index].map((d:any) => <SwiperSlide key={d} >{({ isActive }) => (
                <div className={(isActive ? 'active' : '')}>
                  {index > 1 ? zeroFill(d, 2) : d}
                </div>
            )}</SwiperSlide>)}
        </Swiper>)}
    </SelectPicker>
	)
}

export default _
