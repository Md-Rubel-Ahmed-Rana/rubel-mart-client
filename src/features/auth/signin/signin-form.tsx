"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { signinSchema, SigninSchemaType } from "@/validations/auth.validation";
import { useSignInMutation } from "@/apis/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
    <form onSubmit={form.handleSubmit(handleUserSignIn)} className="space-y-5">
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
        {isLoading ? "Signing..." : "Sign In"}
      </Button>
    </form>
  );
};

export default SigninForm;
