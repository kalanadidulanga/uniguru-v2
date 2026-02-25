"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function handleCredentialsSignin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/login",
    });

    // if (result?.error) {
    //   return { message: result.error };
    // }

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials" };
        default:
          return { message: "Something went wrong." };
      }
    }
    throw error;
  }
}
export async function handleSignOut() {
  await signOut({ redirect: false });
  redirect("/login");
}
