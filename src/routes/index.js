import CoursePage from "../pages/CoursePage/CoursePage";
import HomePage from "../pages/HomePage/HomePage";
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
    path: "/learning",
    page: CoursePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/user/profile",
    page: ProfilePage,
    isShowHeader: true,
    isShowFooter: false,
  },
];
