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
import LoadingButton from "@/app/components/loading-button";
import { useState } from "react";
import ErrorMessage from "@/app/components/error-message";
import { signUpSchema } from "@/lib/zod";
import {
  handleCredentialsSignin,
  handleSignUp,
} from "@/app/actions/authActions";
import Link from "next/link";
import PasswordIcon from "@/app/components/ui/icons/PasswordIcon";
import EmailIcon from "@/app/components/ui/icons/EmailIcon";
import { UserIcon } from "lucide-react";

const SignUp = () => {
  const [globalError, setGlobalError] = useState<string>("");
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      const result: ServerActionResponse = await handleSignUp(values);
      if (result.success) {
        console.log("Account created successfully");
        const valuesForSignin = {
          email: values.email,
          password: values.password,
        };
        await handleCredentialsSignin(valuesForSignin);
      } else {
        setGlobalError(result.message);
      }
    } catch (error) {
      setGlobalError("An unexpected error occured. Please try again.");
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
            <CardTitle className="text-3xl font-bold text-left text-gray-800">
              Sign Up
            </CardTitle>
            <span className="text-md text-start text-gray-400">Welcome!</span>
          </CardHeader>

          <CardContent className="w-full">
            {globalError && <ErrorMessage error={globalError} />}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {["name", "email", "password", "confirmPassword"].map(
                  (field) => (
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as keyof z.infer<typeof signUpSchema>}
                      render={({ field: fieldProps }) => (
                        <FormItem>
                          <FormLabel>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="px-12 py-7 rounded-full border-[#A9A9A9] opacity-[0.7]"
                              type={
                                field.toLowerCase().includes("password")
                                  ? "password"
                                  : field === "email"
                                  ? "email"
                                  : "text"
                              }
                              placeholder={`Enter your ${field}`}
                              {...fieldProps}
                              autoComplete="off"
                              icon={
                                field.toLowerCase().includes("password") ? (
                                  <PasswordIcon color="#a9a9a9" />
                                ) : field.toLowerCase().includes("email") ? (
                                  <EmailIcon color="#a9a9a9" />
                                ) : (
                                  <UserIcon color="#a9a9a9" />
                                )
                              }
                            ></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  )
                )}
                <LoadingButton pending={form.formState.isSubmitting}>
                  Sign up
                </LoadingButton>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
