import { signupTest } from "./fixtures/signup";
import { verifyRootPage } from "./helper-functions";

let user;

signupTest(
  "Should sign up with email and password",
  async ({ signupPage, rootPage, headerPage }) => {
    await verifyRootPage(rootPage);
    await headerPage.goToSignUpScreen();
    await signupPage.verifyNavigationToSignUpScreen();
    await signupPage.fillSignUpFormAndSubmit();
    user = await signupPage.verifyPageAfterLogin();
  },
);

signupTest.afterAll(async () => {
  // TODO: Delete user requires edge function in Supabase. Parking this for now
  // await deleteUser(user.user.id);
});
