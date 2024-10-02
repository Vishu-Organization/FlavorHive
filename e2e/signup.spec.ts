import { signupTest } from "./fixtures/signup";

let user;

signupTest("Sign up with email password", async ({ signupPage, rootPage }) => {
  await rootPage.gotoRootRoute();
  await signupPage.verifyPageTitile();
  await signupPage.navigateToSignUpScreen();
  await signupPage.verifyPageUrl();
  await signupPage.fillSignUpFormAndSubmit();
  user = await signupPage.verifyPageAfterLogin();
});

signupTest.afterAll(async () => {
  // TODO: Delete user requires edge function in Supabase. Parking this for now
  // await deleteUser(user.user.id);
});
