import { Page, expect } from "@playwright/test";

export class OurVisionPage {
  constructor(private page: Page) {
    this.page = page;
    console.log(this.page.url());
  }

  get ourVisionLink() {
    return this.page.getByTestId("our-vision-link");
  }

  get mainVision() {
    return this.page.getByTestId("main-vision");
  }

  get subVision() {
    return this.page.getByTestId("sub-vision");
  }

  get video() {
    return this.page.locator('[data-testid="youtube"]');
  }

  get fishSVG() {
    return this.page.getByTestId("fish");
  }
  get pigSVG() {
    return this.page.getByTestId("pig");
  }
  get sproutSVG() {
    return this.page.getByTestId("sprout");
  }

  get watchOnYoutubeBtn() {
    return this.page
      .locator('[data-testid="youtube"]')
      .contentFrame()
      .getByRole("link", { name: "Watch on YouTube" });
  }

  async navigateToOurVisionScreen() {
    await this.ourVisionLink.click();
  }

  async verifyOurVisionPageContent() {
    await expect(this.video).toBeVisible();
    await expect(this.mainVision).toBeVisible();
    await expect(this.mainVision).toContainText(
      "Our food system - how food is grown and distributed - is complicated, and making good choices for your family can be difficult",
    );
    await expect(this.subVision).toBeVisible();
    await expect(this.subVision).toContainText(
      "It can be hard to tell whether food is high-quality and sustainably grown at the grocery store.",
    );
    await expect(this.fishSVG).toBeVisible();
    await expect(this.pigSVG).toBeVisible();
    await expect(this.sproutSVG).toBeVisible();
  }

  async verifyYouTubeVideo() {
    const youTubeTabPromise = this.page.waitForEvent("popup");
    await this.watchOnYoutubeBtn.click();
    const youTubePage = await youTubeTabPromise;
    expect(youTubePage.url()).toContain(
      "https://www.youtube.com/watch?v=C_Xgn87CF-I",
    );
    await youTubePage.close();
  }
}
