import { Button, TextField } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import { Link, createLazyRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import GoogleIcon from "../../assets/google.svg";
import {
  useSignInWithGoogle,
  useSignInWithPassword,
} from "../../services/use-mutations";

const LogIn = () => {
  const { mutate: signInWithGoogleMutate } = useSignInWithGoogle();
  const {
    mutate: signInWithPasswordMutate,
    isSuccess: isSignInWithPasswordSuccess,
  } = useSignInWithPassword();
  const navigate = useNavigate();
  const onSignInWithGoogle = async (e: any) => {
    e.preventDefault();
    signInWithGoogleMutate();
  };

  if (isSignInWithPasswordSuccess) {
    navigate({ to: "/" });
  }

  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validatorAdapter: zodValidator(),

    onSubmit: async ({ value }) => {
      signInWithPasswordMutate(value);
    },
  });

  return (
    <div className="container p-8">
      <div className="mx-auto w-[75%] space-y-4 bg-white p-5 shadow-md md:w-[50%] lg:w-[40%] xl:w-[25%]">
        <h1
          className="text-center text-3xl font-semibold text-primary"
          data-testid="text-login-header"
        >
          Login
        </h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Field
            name="email"
            validators={{
              onChange: z
                .string()
                .min(1, "Email is required")
                .email("Invalid email address"),
            }}
            children={({ state, handleChange, handleBlur }) => (
              <TextField
                id="email"
                size="small"
                label="Email"
                variant="outlined"
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter email"
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
            name="password"
            validators={{
              onChange: z
                .string()
                .min(1, "Password is required")
                .min(6, "Password should be minimum 6 characters"),
            }}
            children={({ state, handleChange, handleBlur }) => (
              <TextField
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
                  state.meta.errors[0]?.toString().split(",").length === 1
                    ? state.meta.errors
                    : state.meta.errors[0]?.toString().split(",")[0]
                }
              />
            )}
          />
          <div className="grid grid-cols-2 items-center text-[14px]">
            <Field
              name="rememberMe"
              children={({ state, handleChange }) => (
                <div className="lets flex items-center space-x-2 text-primary-toggle-text">
                  <input
                    className="size-4"
                    type="checkbox"
                    id="remember"
                    name="Remember Me?"
                    checked={state.value}
                    onChange={(e) => handleChange(e.target.checked)}
                  />
                  <label htmlFor="remember" className="hover:cursor-pointer">
                    Remember Me?
                  </label>
                </div>
              )}
            />
            <Link
              data-testid="link-forgot-password"
              className="justify-self-end"
            >
              Forgot Password?
            </Link>
          </div>
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
                  data-testid="btn-login"
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    borderRadius: "2px",
                    backgroundColor: "#002684",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    ":hover": {
                      backgroundColor: "#002c9b",
                    },
                  }}
                >
                  Log In
                </Button>
                <div className="text-center text-sm font-medium">OR</div>
                <button
                  data-testid="btn-google"
                  className="flex w-full items-center justify-center gap-3 rounded-sm border-[#dadce0] bg-white py-[0.5em] transition-colors duration-200 ease-in hover:border-[#d2e3fc] hover:bg-signup-google"
                  onClick={onSignInWithGoogle}
                >
                  <GoogleIcon />
                  <span className="text-sm font-medium">
                    Sign in with Google
                  </span>
                </button>
              </div>
            )}
          />
        </form>
        <h2 className="text-center text-sm">
          <span className="text-primary-info">
            Don't have an account?&nbsp;
          </span>
          <Link
            data-testid="link-signup"
            className="font-extrabold"
            to={"/users/sign-up"}
          >
            Sign Up
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default LogIn;

export const Route = createLazyRoute("/users/sign-in")({
  component: LogIn,
});
