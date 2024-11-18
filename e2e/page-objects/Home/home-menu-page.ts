import { Page, expect } from "@playwright/test";

export class HomeMenuPage {
  constructor(private page: Page) {
    this.page = page;
  }

  private get chooseText() {
    return this.page.getByTestId("text-home-menu-choose");
  }

  private get weeklyOptionsText() {
    return this.page.getByTestId("text-home-menu-weekly-options");
  }

  private get browseMenuLink() {
    return this.page.getByTestId("link-home-menu-browse-menu");
  }

  private get mediterraneanImg() {
    return this.page.getByTestId("img-home-menu-mediterranean");
  }

  private get starterImg() {
    return this.page.getByTestId("img-home-menu-starter");
  }

  private get pancakeImg() {
    return this.page.getByTestId("img-home-menu-pancake");
  }

  private get mediterraneanTitleText() {
    return this.page.getByTestId("text-home-menu-title-mediterranean");
  }

  private get starterTitleText() {
    return this.page.getByTestId("text-home-menu-title-starter");
  }

  private get pancakeTitleText() {
    return this.page.getByTestId("text-home-menu-title-pancake");
  }

  async verifyHomeMenuScreenDetails() {
    await this.verifyTexts();
    await this.verifyImages();
    await expect(this.browseMenuLink).toBeVisible();
  }

  async verifyTexts() {
    await expect(this.chooseText).toContainText("Choose from");
    await expect(this.weeklyOptionsText).toContainText("100+");
    await expect(this.mediterraneanTitleText).toContainText("mediterranean");
    await expect(this.starterTitleText).toContainText("starter");
    await expect(this.pancakeTitleText).toContainText("pan");
  }

  async verifyImages() {
    await expect(this.pancakeImg).toBeVisible();
    await expect(this.mediterraneanImg).toBeVisible();
    await expect(this.starterImg).toBeVisible();
  }
}
