import { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["transition-colors", "duration-200", "ease-in", "rounded-3xl"],
  {
    variants: {
      display: {
        default: ["block"],
        flex: ["flex", "items-center", "justify-center"],
        "inline-block": ["inline-block"],
      },
      variant: {
        default: [
          "bg-primary",
          "hover:bg-primary-hover",
          "text-white",
          "text-sm",
          "font-semibold",
          "hover:border-blue20",
          "tracking-widest",
          "uppercase",
        ],
        google: [
          "border-gray10",
          "hover:border-blue10",
          "hover:bg-blue50",
          "gap-3",
          "bg-white",
        ],
        icon: [
          "rounded-full",
          "w-10",
          "h-10",
          "p-2.5",
          "text-gray20",
          "bg-transparent",
          "hover:border-transparent",
          "hover:bg-gray-200",
        ],
      },
      size: {
        full: ["w-full"],
        default: ["p-2"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      display: "default",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({
  variant,
  size,
  display,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size, display }), className)}
    ></button>
  );
};

export default Button;
