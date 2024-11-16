type Recipe = {
  label: string;
  image: string;
  images: {
    LARGE?: ImageContent;
    REGULAR: ImageContent;
    SMALL: ImageContent;
    THUMBNAIL: ImageContent;
  };
};

type ImageContent = {
  height: number;
  url: string;
  width: number;
};

type HomeMenu = {
  mediterranean: Recipe;
  breakFast: Recipe;
  vegetarian: Recipe;
  french: Recipe;
  indian: Recipe;
  starter: Recipe;
  snack: Recipe;
  mexican: Recipe;
  pancake: Recipe;
  soup: Recipe;
};
