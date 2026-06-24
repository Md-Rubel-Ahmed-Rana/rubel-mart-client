"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  signinSchema,
  SigninSchemaType,
} from "@/app/validations/auth.validation";

const SigninForm = () => {
  const { register }: any = {};

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SigninSchemaType) => {
    setError("");
    setSuccess("");

    try {
      const response = await register(values);

      if (response.success) {
        setSuccess(response.message ?? "Account created successfully.");

        form.reset();
      } else {
        setError(response.message ?? "Something went wrong.");
      }
    } catch (error) {
      console.error(error);

      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      {error && (
        <Alert variant="destructive">
          {" "}
          <AlertDescription>{error} </AlertDescription>{" "}
        </Alert>
      )}
      {success && (
        <Alert>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-2">
        <label className="text-sm font-medium">Email Address</label>

        <Input
          type="email"
          placeholder="john@example.com"
          {...form.register("email")}
        />

        {form.formState.errors.email && (
          <p className="text-destructive text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>

        <Input
          type="password"
          placeholder="Enter your password"
          {...form.register("password")}
        />

        {form.formState.errors.password && (
          <p className="text-destructive text-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
