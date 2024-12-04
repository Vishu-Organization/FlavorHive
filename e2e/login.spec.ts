import { loginTest } from "./fixtures/login";
import { verifyRootPage, verifyWhatsCookingPage } from "./helper-functions";
import { HeaderPage } from "./page-objects/header-page";
import { LoginPage } from "./page-objects/login-page";

const loginAction = async (loginPage: LoginPage, headerPage: HeaderPage) => {
  await loginPage.verifyNavigationToLoginScreen();
  await loginPage.fillSignUpFormAndSubmit();
  const userResponse = await loginPage.verifyPageAfterLogin();
  await headerPage.verifyWelcomeText(userResponse.user.user_metadata.name);
};

// loginTest(
//   "Navigate to login screen and login with email and password",
//   async ({
//     rootPage,
//     headerPage,
//     loginPage,
//     whatsCookingPage,
//     viewport,
//     browserName,
//   }) => {
//     // await verifyRootPage(rootPage);
//     // await headerPage.goToLoginScreen();
//     // await verifyWhatsCookingPage(
//     //   whatsCookingPage,
//     //   viewport?.width!,
//     //   browserName,
//     // );
//     // await loginAction(loginPage, headerPage);
//   },
// );

// loginTest(
//   "Navigate to signup screen, then to login screen and login with email and password",
//   async ({ rootPage, headerPage, loginPage, signupPage }) => {
//     // await verifyRootPage(rootPage);
//     // await headerPage.goToSignUpScreen();
//     // await signupPage.verifyNavigationToSignUpScreen();
//     // await signupPage.goToLoginScreen();
//     // await loginAction(loginPage, headerPage);
//   },
// );
