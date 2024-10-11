import { loginTest } from "./fixtures/login";
import { verifyRootPage } from "./helper-functions";
import { HeaderPage } from "./page-objects/header-page";
import { LoginPage } from "./page-objects/login-page";

const loginAction = async (
  loginPage: LoginPage,
  headerPage: HeaderPage,
  browserName: "firefox" | "chromium" | "webkit",
) => {
  await loginPage.verifyNavigationToLoginScreen();
  await loginPage.fillSignUpFormAndSubmit(browserName);
  const userResponse = await loginPage.verifyPageAfterLogin();
  await headerPage.verifyWelcomeText(userResponse.user.user_metadata.name);
};

loginTest(
  "Navigate to login screen and login with email and password",
  async ({ rootPage, headerPage, loginPage, browserName }) => {
    await verifyRootPage(rootPage);
    await headerPage.goToLoginScreen();
    await loginAction(loginPage, headerPage, browserName);
  },
);

loginTest(
  "Navigate to signup screen, then to login screen and login with email and password",
  async ({ rootPage, headerPage, loginPage, signupPage, browserName }) => {
    await verifyRootPage(rootPage);
    await headerPage.goToSignUpScreen();
    await signupPage.verifyNavigationToSignUpScreen();
    await signupPage.goToLoginScreen();
    await loginAction(loginPage, headerPage, browserName);
  },
);
