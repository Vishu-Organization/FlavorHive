import { Page, expect } from "@playwright/test";

export class OnTheMenuPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get pageContent() {
    return this.page.getByText("We are building the menu");
  }

  async verifyPageContent() {
    expect(this.page.url()).toContain("/on-the-menu");
    await expect(this.pageContent).toBeVisible();
  }
}
