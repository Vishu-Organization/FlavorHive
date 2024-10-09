import test from "@playwright/test";
import { signupTest } from "./fixtures/signup";
import { verifyRootPage } from "./helper-functions";

signupTest(
  "Should sign up with email and password",
  async ({ signupPage, rootPage, headerPage, browserName }) => {
    test.skip(
      browserName === "firefox" || browserName === "webkit",
      "This test only works on chrome atm",
    );

    await verifyRootPage(rootPage);
    await headerPage.goToSignUpScreen();
    await signupPage.verifyNavigationToSignUpScreen();
    await signupPage.fillSignUpFormAndSubmit();
    const userResponse = await signupPage.verifyPageAfterLogin();
    await headerPage.verifyWelcomeText(userResponse.user.user_metadata.name);
  },
);

signupTest.afterAll(async () => {
  // TODO: Delete user requires edge function in Supabase. Parking this for now
  // await deleteUser(user.user.id);
});
