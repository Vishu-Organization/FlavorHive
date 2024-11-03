import { Page, expect } from "@playwright/test";

export class HomeTestimonialsPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get testimonialsImg() {
    return this.page.getByTestId("img-home-testimonials-background");
  }

  get testimonialsTexturePatternImg() {
    return this.page.getByTestId("img-home-testimonials-texture-pattern");
  }

  get happyCustomersInfoText() {
    return this.page.getByTestId("text-home-testimonials-happy-customers");
  }

  async verifyTestimonialsDetails() {
    await expect(this.testimonialsImg).toBeVisible();
    await expect(this.testimonialsTexturePatternImg).toBeVisible();
    await expect(this.testimonialsTexturePatternImg).toHaveClass("h-5");
    await expect(this.happyCustomersInfoText).toContainText(
      "Celebrating 10 years of happy customers",
    );
  }
}
