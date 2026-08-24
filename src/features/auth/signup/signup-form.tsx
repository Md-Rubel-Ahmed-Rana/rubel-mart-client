"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signupSchema, SignupSchemaType } from "@/validations/auth.validation";
import { useSignUpMutation } from "@/apis/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [userSignUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const handleUserSignUp = async (values: SignupSchemaType) => {
    try {
      const response = await userSignUp(values).unwrap();

      if (response.success) {
        toast.success(response.message ?? "Account created successfully.");
        form.reset();
        router.push("/signin");
      } else {
        toast.error(response.message ?? "Something went wrong.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleUserSignUp)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>

          <Input
            disabled={isLoading}
            placeholder="John"
            {...form.register("first_name")}
          />

          {form.formState.errors.first_name && (
            <p className="text-destructive text-sm">
              {form.formState.errors.first_name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>

          <Input
            disabled={isLoading}
            placeholder="Doe"
            {...form.register("last_name")}
          />

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
          disabled={isLoading}
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
          disabled={isLoading}
          placeholder="Enter your password"
          {...form.register("password")}
        />

        {form.formState.errors.password && (
          <p className="text-destructive text-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Creating" : "Create Account"}
      </Button>
    </form>
  );
};

export default SignupForm;
