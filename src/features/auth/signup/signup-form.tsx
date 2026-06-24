"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  signupSchema,
  SignupSchemaType,
} from "@/app/validations/auth.validation";

const SignupForm = () => {
  const { register }: any = {};

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignupSchemaType) => {
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
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>

          <Input placeholder="John" {...form.register("first_name")} />

          {form.formState.errors.first_name && (
            <p className="text-destructive text-sm">
              {form.formState.errors.first_name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>

          <Input placeholder="Doe" {...form.register("last_name")} />

          {form.formState.errors.last_name && (
            <p className="text-destructive text-sm">
              {form.formState.errors.last_name.message}
            </p>
          )}
        </div>
      </div>
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
        Create Account
      </Button>
    </form>
  );
};

export default SignupForm;
