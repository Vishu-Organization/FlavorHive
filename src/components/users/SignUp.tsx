import { Button, TextField } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import { Link, createLazyRoute, useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { useState } from "react";
import {
  useSignInWithGoogle,
  useSignUpWithPassword,
} from "../../services/use-mutations";

import GoogleIcon from "../../assets/google.svg";

const SignUp = () => {
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const {
    mutate: signUpWithPasswordMutate,
    isSuccess: isSignUpWithPasswordSuccess,
  } = useSignUpWithPassword();
  const { mutate: signInWithGoogleMutate } = useSignInWithGoogle();
  const navigate = useNavigate();

  const onSignUpWithGoogle = async (e: any) => {
    e.preventDefault();
    signInWithGoogleMutate();
  };

  if (isSignUpWithPasswordSuccess) {
    navigate({ to: "/" });
  }

  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validatorAdapter: zodValidator(),

    onSubmit: async ({ value }) => {
      if (!value.password && !isContinue) {
        setIsContinue(true);
        return;
      }

      if (value.email && value.password) {
        signUpWithPasswordMutate(value);
      }
    },
  });
  return (
    <div className="mx-auto mb-10 max-w-[1440px] bg-sign-up bg-cover bg-scroll bg-[50%] bg-no-repeat px-32 py-20">
      <div className="container mx-auto max-w-[830px] space-y-4 bg-white p-10">
        <div className="flex flex-col text-center">
          <h1
            className="mb-2 text-3xl font-bold text-primary"
            data-testid="sign-up-header"
          >
            Get Started
          </h1>
          <h2 className="mx-4 text-base font-medium">
            Farm-fresh ingredients and delicious recipes delivered weekly to
            your home
          </h2>
        </div>
        <section className="grid grid-cols-2 gap-8">
          <div>How it works</div>
          <div>
            <div>
              <section className="mb-8 pl-4 text-sm">
                Already have an account?
                <Link
                  to="/users/sign-in"
                  className="ml-2 inline-grid grid-cols-2 items-center gap-[0.1rem] font-extrabold text-primary hover:text-primary hover:underline"
                >
                  <span>Sign in</span>
                  <ChevronRight size="12" className="text-primary" />
                </Link>
              </section>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <Field
                  name="name"
                  validators={{
                    onChange: z
                      .string()
                      .min(1, "Name is required")
                      .min(3, "Name should be minimum 3 characters long"),
                  }}
                  children={({ state, handleChange, handleBlur }) => (
                    <TextField
                      data-testid="input-name"
                      id="name"
                      size="small"
                      label="Name"
                      variant="outlined"
                      defaultValue={state.value}
                      onChange={(e) => handleChange(e.target.value)}
                      onBlur={handleBlur}
                      placeholder="Enter name"
                      margin="dense"
                      fullWidth
                      error={!!state.meta.errors?.length}
                      helperText={
                        state.meta.errors[0]?.toString().split(",").length === 1
                          ? state.meta.errors
                          : state.meta.errors[0]?.toString().split(",")[0]
                      }
                    />
                  )}
                />
                <Field
                  name="email"
                  validators={{
                    onSubmit: z.string().email("Invalid email address"),
                  }}
                  children={({ state, handleChange, handleBlur }) => (
                    <TextField
                      data-testid="input-email"
                      id="email"
                      size="small"
                      label="Email"
                      variant="outlined"
                      defaultValue={state.value}
                      onChange={(e) => handleChange(e.target.value)}
                      onBlur={handleBlur}
                      placeholder="Enter user name"
                      margin="dense"
                      fullWidth
                      error={!!state.meta.errors?.length}
                      helperText={
                        state.meta.errors[0]?.toString().split(",").length === 1
                          ? state.meta.errors
                          : state.meta.errors[0]?.toString().split(",")[0]
                      }
                    />
                  )}
                />
                <h2 className="mt-2 px-4 text-center text-[12px] font-normal leading-5">
                  By continuing, you agree to our&nbsp;
                  <Link
                    data-testid="link-terms-of-use"
                    to="/pages/terms"
                    className="text-header-primary underline hover:text-header-primary"
                  >
                    Terms of Use
                  </Link>
                  &nbsp;and consent to our&nbsp;
                  <Link
                    data-testid="link-privacy-policy"
                    to="/pages/privacy"
                    className="text-header-primary underline hover:text-header-primary"
                  >
                    Privacy Policy
                  </Link>
                </h2>

                {isContinue && (
                  <Field
                    name="password"
                    validators={{
                      onChange: z
                        .string()
                        .min(1, "Password is required")
                        .min(6, "Password should be minimum 6 characters"),
                    }}
                    children={({ state, handleChange, handleBlur }) => (
                      <TextField
                        data-testid="input-password"
                        id="password"
                        type="password"
                        size="small"
                        label="Password"
                        variant="outlined"
                        defaultValue={state.value}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={handleBlur}
                        placeholder="Enter password"
                        margin="normal"
                        fullWidth
                        error={!!state.meta.errors?.length}
                        helperText={
                          state.meta.errors[0]?.toString().split(",").length ===
                          1
                            ? state.meta.errors
                            : state.meta.errors[0]?.toString().split(",")[0]
                        }
                      />
                    )}
                  />
                )}

                <Subscribe
                  selector={(state) => [
                    state.values.email && state.values.password,
                    state.canSubmit,
                    state.isSubmitting,
                    state.isTouched,
                  ]}
                  children={() => (
                    <div className="space-y-4">
                      <Button
                        data-testid="btn-submit"
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{
                          borderRadius: "20px",
                          backgroundColor: "#002684",
                          fontSize: "13px",
                          letterSpacing: "2px",
                          ":hover": {
                            backgroundColor: "#002c9b",
                          },
                        }}
                      >
                        {isContinue ? "Sign Up" : "Continue"}
                      </Button>
                      <div className="text-center text-sm font-medium">OR</div>
                      <button
                        data-testid="btn-google"
                        className="flex w-full items-center justify-center gap-3 rounded-3xl border-[#dadce0] bg-white py-[0.5em] transition-colors duration-200 ease-in hover:border-[#d2e3fc] hover:bg-signup-google"
                        onClick={onSignUpWithGoogle}
                      >
                        <GoogleIcon />
                        <span className="text-sm font-medium">
                          Sign up with Google
                        </span>
                      </button>
                    </div>
                  )}
                />
              </form>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;

export const Route = createLazyRoute("/users/sign-up")({
  component: SignUp,
});
