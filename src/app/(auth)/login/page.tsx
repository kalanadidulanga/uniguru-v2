"use client";

import { getSession, useSession } from "next-auth/react";
import { Button } from "@/components/myComponents/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/zod";
import { z } from "zod";
import { handleCredentialsSignin } from "@/actions/authActions";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { data: session, status, update } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [globalError, setGlobalError] = useState<string>("");

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [error]);

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      setLoading(true);
      const result = await handleCredentialsSignin(values);

      if (result?.message) {
        toast.error(result.message);
        console.log(result.message);
        setGlobalError(result.message);
        return;
      }

      // Update the session after successful login
      await update();
    } catch (error) {
      console.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="my-container flex w-full h-full items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-8 rounded-lg shadow-lg p-8 w-full max-w-sm border"
          >
            <Link href={"/"}>
              <Image
                src={"/logo2.png"}
                alt="Logo"
                width={300}
                height={300}
                className="w-44 h-auto object-cover object-center rounded-lg"
              />
            </Link>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className=" w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="blue2"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login Now"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
