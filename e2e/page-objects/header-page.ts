import { Page, expect } from "@playwright/test";

export class HeaderPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get ourVisionLink() {
    return this.page.getByTestId("header-our-vision");
  }

  get onTheMenuLink() {
    return this.page.getByTestId("header-on-the-menu");
  }

  get signupLink() {
    return this.page.getByTestId("link-header-sign-up");
  }

  get welcomeText() {
    return this.page.getByTestId("text-welcome");
  }

  async navigateToOurVisionScreen() {
    await this.ourVisionLink.click();
  }

  async goToOnTheMenuScreen() {
    await this.onTheMenuLink.click();
  }

  async goToSignUpScreen() {
    await this.signupLink.click();
  }

  async verifyWelcomeText() {
    await expect(this.welcomeText).toBeVisible();
    await expect(this.welcomeText).toContainText("Welcome Vishu!");
  }
}
