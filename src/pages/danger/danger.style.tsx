import styled from 'styled-components'
import { MX, COLOR, DateText, DataTableList, DashboardBox, ListBox } from '@/shared'

export const Contents = styled.div`

${DateText}
${DataTableList}
${DashboardBox}
${ListBox}

background:#F5F6FA;

.danger-list-wrap{
  .calendar-wrap{width:calc(100% + 3.2rem);margin-left:-1.6rem;}
  .date-danger-list{margin-top:2.4rem; 
    .date-text{margin-bottom:1.6rem; }
  }
}
.teacher-list {margin-top:2.4rem;
  .tit{ color:#111;font-weight:500;font-size:1.6rem;display:block;margin-bottom:1.6rem; }
}
.banner-profile{margin-top:2.4rem;}
.dashboard-box{margin-top:1.6rem;
  + .data-type1{margin-top:2.8rem;}
}

.danger-detail-wrap {
  .page-top-area { margin-bottom: 2.4rem; padding: 1.6rem 3.2rem 2.6rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem;
    .visual { width: 13.4rem; height: 13.4rem; margin: 0 auto; background: ${MX.src('/images/visual-danger.svg')} no-repeat 0 0; background-size: auto 100%; }
    .txt { margin-top: 1.2rem; font-size: 1.4rem; color: #666666; text-align: center; }
    .btn-wrap {
      margin-top: 2rem;
      .btn-img-view { height: 4rem; width: 22rem; border: 0.1rem solid ${ COLOR.primary }; border-radius: 1rem; font-weight: 500; font-size: 1.6rem; color: ${ COLOR.primary }; }
    }
  }
  .btn-wrap {
    margin-top: 3.2rem;
  }
}

.danger-solve-wrap {padding-top:2.4rem;}
`
export default Contents