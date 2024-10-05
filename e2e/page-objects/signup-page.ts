import { Page, expect } from "@playwright/test";

export class SignupPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get signupLink() {
    return this.page.getByRole("link", { name: "Sign up" });
  }

  get header() {
    return this.page.getByRole("heading", { name: "Get Start" });
  }

  get nameInput() {
    return this.page.getByPlaceholder("Enter name");
  }

  get passwordInput() {
    return this.page.getByPlaceholder("Enter password");
  }

  get userNameInput() {
    return this.page.getByPlaceholder("Enter user name");
  }

  get termsOfUseLink() {
    return this.page.getByRole("link", { name: "Terms of Use" });
  }

  get privacyPolicyLink() {
    return this.page.getByRole("link", { name: "Privacy Policy" });
  }

  get welcomeText() {
    return this.page.getByText("Welcome Vishu!");
  }

  async navigateToSignUpScreen() {
    await this.signupLink.click();
    await expect(this.header).toBeVisible();
  }

  async verifyPageUrl() {
    await expect(this.page.url().includes("sign-up")).toBe(true);
  }

  async fillSignUpFormAndSubmit() {
    await this.nameInput.click();
    await this.nameInput.fill("Vishu");
    await this.nameInput.press("Tab");
    await this.userNameInput.fill("vishuhanuma@gmail.com");
    await this.userNameInput.press("Enter");
    await this.userNameInput.press("Tab");
    await this.termsOfUseLink.press("Tab");
    await this.privacyPolicyLink.press("Tab");
    await this.passwordInput.fill("vishu1");
    await this.passwordInput.press("Enter");
  }

  async verifyPageAfterLogin() {
    const response = await this.page.waitForResponse(`*/**/auth/v1/signup*`);
    await expect(this.welcomeText).toBeVisible();
    return await response.json();
  }
}
