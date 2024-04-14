import { useRoutes } from 'react-router-dom';

import LayoutPrimary from "./widgets/layout/layout.primary";
import ToastTest from "./test/toast/page";
import AlertTest from "./test/dialog/page";

import Splash from "./pages/splash/splash.main";
import Main from "./pages/home/home.main";

import RuleAgree from "./pages/agreement/agreement.rule.agree";
import Rule from "./pages/agreement/agreement.rule";
import Certify from "./pages/agreement/agreement.certify";
import IdRegist from "./pages/agreement/agreement.id.register";
import Password from "./pages/agreement/agreement.password";
import JoinComplete from "./pages/agreement/agreement.join.complete";

import Login from "./pages/agreement/agreement.login";
import RequestAccess from "./pages/agreement/agreement.request.access";
import IdpwFind from "./pages/agreement/agreement.pw.find";
import IdCheck from "./pages/agreement/agreement.id.check";
import PwChange from "./pages/agreement/agreement.pw.change";

import ServiceChoice from "./pages/property/property.service.choice";
import CenterSearch from "./pages/property/property.center.search";
import PropertyRegist from "./pages/property/property.regist";
import NameRegist from "./pages/property/property.name.regist";
import ProfileRegist from "./pages/property/property.profile.regist";
import PropertyComplete from "./pages/property/property.complete";

import NoticeList from "./pages/notice/notice.list";
import NoticeWrite from "./pages/notice/notice.write";
import NoticeWrite2 from "./pages/notice/notice.write2";
import NoticePreview from "./pages/notice/notice.preview";
import NoticeDetail from "./pages/notice/notice.detail";

import ReportList from "./pages/report/report.list";
import ReportWrite from "./pages/report/report.write";
import ReportPreview from "./pages/report/report.preview";
import ReportDetail from "./pages/report/report.detail";

import AlbumList from "./pages/album/album.list";
import AlbumWrite from "./pages/album/album.write";
import AlbumPreview from "./pages/album/album.preview";
import AlbumDetail from "./pages/album/album.detail";

import CloudHome from "./pages/cloud/cloud.home";
import CloudFolder from "./pages/cloud/cloud.folder";
import Hold from "./pages/cloud/cloud.hold";

import DangerList from "./pages/danger/danger.list";
import DangerDetail from "./pages/danger/danger.detail";
import DangerSolve from "./pages/danger/danger.solve";

import Mypage from "./pages/privacy/privacy.mypage";
import MypagePhone from "./pages/privacy/privacy.phone";
import MypagePw from "./pages/privacy/privacy.pw";
import AlarmManage from "./pages/privacy/privacy.alarm";
import AppInfo from "./pages/privacy/privacy.appinfo";
import OpenLicense from "./pages/privacy/privacy.license";
import Withdrawal from "./pages/privacy/privacy.withdrawal";

//pub
import LayoutPublishing from "./layout/publishing/PublishingIndex";
import PublishingIndex from "./widgets/layout/layout.primary";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    //pub
    {
      path: '/',
      element: <LayoutPublishing />,
      children: [
        { path: '/', element: <PublishingIndex /> }
      ],
    },
    //page
    {
      path: '/',
      element: <LayoutPrimary />,
      children: [
        { path: '/test/toast', element: <ToastTest /> },
        { path: '/test/dialog', element: <AlertTest /> },
        
        { path: '/publish/splash', element: <Splash /> },
        { path: '/publish/home', element: <Main /> },
        
        { path: '/publish/agreement/rule/agree', element: <RuleAgree /> },
        { path: '/publish/agreement/rule', element: <Rule /> },
        { path: '/publish/agreement/certify', element: <Certify /> },
        { path: '/publish/agreement/id/register', element: <IdRegist /> },
        { path: '/publish/agreement/password', element: <Password /> },
        { path: '/publish/agreement/join/complete', element: <JoinComplete /> },
        
        { path: '/publish/agreement/login', element: <Login /> },
        { path: '/publish/agreement/request/access', element: <RequestAccess /> },
        { path: '/publish/agreement/pw/find', element: <IdpwFind /> },
        { path: '/publish/agreement/id/check', element: <IdCheck /> },
        { path: '/publish/agreement/pw/change', element: <PwChange /> },
        
        { path: '/publish/property/service/choice', element: <ServiceChoice /> },
        { path: '/publish/property/center/search', element: <CenterSearch /> },
        { path: '/publish/property/regist', element: <PropertyRegist /> },
        { path: '/publish/property/name/regist', element: <NameRegist /> },
        { path: '/publish/property/profile/regist', element: <ProfileRegist /> },
        { path: '/publish/property/complete', element: <PropertyComplete /> },

        { path: '/publish/notice/list', element: <NoticeList /> },
        { path: '/publish/notice/write', element: <NoticeWrite /> },
        { path: '/publish/notice/write2', element: <NoticeWrite2 /> },
        { path: '/publish/notice/preview', element: <NoticePreview /> },
        { path: '/publish/notice/detail', element: <NoticeDetail /> },

        { path: '/publish/report/list', element: <ReportList /> },
        { path: '/publish/report/write', element: <ReportWrite /> },
        { path: '/publish/report/preview', element: <ReportPreview /> },
        { path: '/publish/report/detail', element: <ReportDetail /> },

        { path: '/publish/album/list', element: <AlbumList /> },
        { path: '/publish/album/write', element: <AlbumWrite /> },
        { path: '/publish/album/preview', element: <AlbumPreview /> },
        { path: '/publish/album/detail', element: <AlbumDetail /> },

        { path: '/publish/danger/list', element: <DangerList /> },
        { path: '/publish/danger/detail', element: <DangerDetail /> },
        { path: '/publish/danger/solve', element: <DangerSolve /> },

        { path: '/publish/cloud/home', element: <CloudHome /> },
        { path: '/publish/cloud/folder', element: <CloudFolder /> },
        { path: '/publish/cloud/hold', element: <Hold /> },

        { path: '/publish/privacy/mypage', element: <Mypage /> },
        { path: '/publish/privacy/phone', element: <MypagePhone /> },
        { path: '/publish/privacy/pw', element: <MypagePw /> },
        { path: '/publish/privacy/alarm', element: <AlarmManage /> },
        { path: '/publish/privacy/appinfo', element: <AppInfo /> },
        { path: '/publish/privacy/license', element: <OpenLicense /> },
        { path: '/publish/privacy/withdrawal', element: <Withdrawal /> }

      ],
    }
  ]);

  return routes;
}
