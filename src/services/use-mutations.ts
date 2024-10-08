import { useMutation } from "@tanstack/react-query";
import {
  signInWithGoogle,
  signInWithPassword,
  signOut,
  signUpWithPassword,
} from "./api";
import { toast } from "react-toastify";
import { User } from "../types/types";

export const useSignUpWithPassword = () => {
  return useMutation({
    mutationKey: ["signUp", "password"],
    mutationFn: (user: User) => signUpWithPassword(user),
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

export const useSignInWithPassword = () => {
  return useMutation({
    mutationKey: ["signIn", "passoword"],
    mutationFn: (user: User) => signInWithPassword(user),
    onError: (error) => toast.error(error.message),
  });
};
