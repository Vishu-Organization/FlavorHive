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
        ghost: ["hover:bg-gray-100"],
        dark: [
          "bg-secondary-dark",
          "hover:bg-secondary-dark-hover",
          "text-secondary",
        ],
      },
      size: {
        full: ["w-full"],
        default: ["rounded", "p-2"],
        icon: [
          "rounded-full",
          "w-10",
          "h-10",
          "flex",
          "items-center",
          "justify-center",
          "p-2.5",
        ],
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
