"use server";

import { signIn, signOut } from "@/auth";

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/", // Correct typo: "callBackUrl" -> "callbackUrl"
      email,
      password,
    });
  } catch (error) {
    return (error as Error).message;
  }
};

export async function logout() {
  await signOut();
}
