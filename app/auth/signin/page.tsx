"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signInSchema } from "@/lib/zod";
import LoadingButton from "@/app/components/loading-button";
import {
  handleCredentialsSignin,
  handleGithubSignin,
} from "@/app/actions/authActions";
import { useState } from "react";
import ErrorMessage from "@/app/components/error-message";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import EmailIcon from "@/app/components/ui/icons/EmailIcon";
import PasswordIcon from "@/app/components/ui/icons/PasswordIcon";

type Props = {};

const SignIn = (props: Props) => {
  const [globalError, setGlobalError] = useState<string>("");

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const res = await handleCredentialsSignin(values);
      if (res?.message) {
        setGlobalError(res.message);
      }
    } catch (error) {
      console.log("An unexpected error occured. Please try again.");
    }
  };

  return (
    <div className="w-full flex xs:flex-col md:flex-row items-center justify-between min-h-screen">
      <div
        className="left-sect flex-[1.5] w-full min-h-screen xs:hidden md:flex items-center justify-center p-4"
        style={{
          backgroundImage: "url(/assets/auth_bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-2 items-start justify-center text-center w-full pl-28">
          <h1 className="text-3xl text-white font-semibold">TaskTide</h1>
          <span className="text-xl opacity-[0.9] text-white text-left">
            Lorem ipsum dolor sit amet, consectetur.
          </span>
          <Link
            className="shadow-xl mt-5 rounded-full h-[50px] flex items-center justify-center text-md bg-navy-blue text-white p-4 transition-colors hover:bg-blue-700"
            href="/public"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className='right-sect flex-1 w-full flex justify-center p-4 mx-5 xs:bg-[url("/assets/auth_bg.svg")] md:bg-none'>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-left text-gray-80">
              Hello Again!
            </CardTitle>
            <span className="text-md text-start text-gray-400">
              Welcome back
            </span>
          </CardHeader>
          <CardContent className="w-full">
            {globalError && <ErrorMessage error={globalError} />}
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="px-12 py-7 rounded-full border-[#A9A9A9] opacity-[0.7]"
                          type="email"
                          placeholder="Email Address"
                          icon={<EmailIcon color="#a9a9a9" />}
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
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="px-12 py-7 rounded-full border-[#A9A9A9] opacity-[0.7]"
                          placeholder="Password"
                          icon={<PasswordIcon color="#a9a9a9" />}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <LoadingButton pending={form.formState.isSubmitting}>
                  Sign in
                </LoadingButton>
              </form>
            </Form>
            <span className="text-sm text-grayp-500 text-center block my-2">
              or
            </span>
            <form className="w-full" action={handleGithubSignin}>
              <Button
                variant="outline"
                type="submit"
                className="w-full bg-light-white rounded-full p-7 border-gray-400"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Sign in with Github
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
