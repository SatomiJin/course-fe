import AdminPage from "../pages/Admin/AdminPage";
import AdminUserPage from "../pages/Admin/AdminUserPage/AdminUserPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import DetailCoursePage from "../pages/DetailCoursePage/DetailCoursePage";
import HomePage from "../pages/HomePage/HomePage";
import LessonPage from "../pages/LessonPage/LessonPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: false,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/user/profile",
    page: ProfilePage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/learning",
    page: CoursePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/learning/:name",
    page: DetailCoursePage,
    isShowHeader: true,
    // isShowFooter: true,
  },
  {
    path: "/learning/:name/:id",
    page: LessonPage,
    isShowHeader: true,
    // isShowFooter: true,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    // isShowHeader: false,
    isLogin: true,
    isPrivate: true,
    isShowNavBar: true,
  },
  {
    path: "/system/admin/user",
    page: AdminUserPage,
    // isShowHeader: false,
    isLogin: true,
    isPrivate: true,
    isShowNavBar: true,
  },
];
