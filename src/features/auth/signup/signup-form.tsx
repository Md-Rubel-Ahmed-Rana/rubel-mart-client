"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signupSchema, SignupSchemaType } from "@/validations/auth.validation";
import { useSignUpMutation } from "@/apis/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import InputField from "@/common/InputField";

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
    <form
      onSubmit={form.handleSubmit(handleUserSignUp)}
      className="space-y-5  w-full min-w-lg"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <InputField
            type="text"
            label="First Name"
            placeholder="John"
            {...form.register("first_name")}
            error={form.formState.errors.first_name?.message}
            title="Enter your first name"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <InputField
            type="text"
            label="Last Name"
            placeholder="Doe"
            {...form.register("last_name")}
            error={form.formState.errors.last_name?.message}
            title="Enter your last name"
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="space-y-2">
        <InputField
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
          title="Enter your email address"
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <InputField
          type="password"
          label="Password"
          placeholder="********"
          {...form.register("password")}
          error={form.formState.errors.password?.message}
          title="Enter your password"
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
        title={isLoading ? "Creating account..." : "Click to create account"}
        aria-label={isLoading ? "Creating account..." : "Create Account"}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Creating" : "Create Account"}
      </Button>
    </form>
  );
};

export default SignupForm;
