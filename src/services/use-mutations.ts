import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle, signOut, signUpWithPassword } from "./api";
import { toast } from "react-toastify";
import { SignUpUser } from "../types/types";

export const useSignUpWithPassword = () => {
  return useMutation({
    mutationKey: ["signUp", "password"],
    mutationFn: (user: SignUpUser) => signUpWithPassword(user),
    onSuccess: () => toast.success("Signup successful"),
    onError: (error) => toast.error(error.message),
  });
};

export const useSignInWithGoogle = () => {
  return useMutation({
    mutationKey: ["signIn", "Google"],
    mutationFn: () => signInWithGoogle(),
    onError: (error) => toast.error(error.message),
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationKey: ["signOut"],
    mutationFn: () => signOut(),
    onError: (error) => toast.error(error.message),
  });
};
