"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { signinSchema, SigninSchemaType } from "@/validations/auth.validation";
import { useSignInMutation } from "@/apis/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import InputField from "@/common/InputField";

const SigninForm = () => {
  const [userSignIn, { isLoading, isError, error, isSuccess, data }] =
    useSignInMutation();
  const router = useRouter();

  const form = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleUserSignIn = async (values: SigninSchemaType) => {
    try {
      const response = await userSignIn(values).unwrap();
      if (response?.status_code === 200) {
        toast.success(response?.message ?? "Account login successfully.");
        form.reset();
        router.push("/profile");
      } else {
        toast.error(response?.message ?? "Something went wrong.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleUserSignIn)}
      className="space-y-5 w-full min-w-md"
    >
      {isError && (
        <Alert variant="destructive">
          {" "}
          <AlertDescription>
            {(error as any)?.message || (error as any)?.data?.message}{" "}
          </AlertDescription>{" "}
        </Alert>
      )}
      {isSuccess && (
        <Alert>
          <AlertDescription>{data?.message}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-8">
        <InputField
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
          title="Enter your email address"
          disabled={isLoading}
        />

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
        title={isLoading ? "Signing in..." : "Click to continue signing in"}
        aria-label={isLoading ? "Signing in..." : "Sign In"}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Signing..." : "Sign In"}
      </Button>
    </form>
  );
};

export default SigninForm;
