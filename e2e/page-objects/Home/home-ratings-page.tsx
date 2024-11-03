import { Page, expect } from "@playwright/test";

export class HomeRatingsPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get ratingsImg() {
    return this.page.getByTestId("img-home-ratings");
  }

  get ratingsCustomerThoughtText() {
    return this.page.getByTestId("text-home-ratings-customer-thought");
  }

  get appRatingText() {
    return this.page.getByTestId("text-home-ratings-app-rating");
  }

  get ratingsBasedOnText() {
    return this.page.getByTestId("text-home-ratings-based-on");
  }

  get totalRatingsText() {
    return this.page.getByTestId("text-home-ratings-total-ratings");
  }

  async verifyHomeRatingsDetails(width: number) {
    await expect(this.ratingsImg).toBeVisible();
    await expect(this.ratingsCustomerThoughtText).toContainText("Excellent");
    await expect(this.appRatingText).toContainText("4.7");
    await expect(this.totalRatingsText).toContainText("40k");
    width === 640
      ? await expect(this.ratingsBasedOnText).toBeHidden()
      : await expect(this.ratingsBasedOnText).toBeVisible();
  }
}
