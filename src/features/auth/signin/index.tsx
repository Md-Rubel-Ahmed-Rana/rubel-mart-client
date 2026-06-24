import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SigninForm from "./signin-form";

const Signin = () => {
  return (
    <Card className="border-border shadow-lg">
      <CardContent className="space-y-8 p-6 md:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="text-muted-foreground">Access you account</p>
        </div>

        <SigninForm />

        <div className="text-center text-sm">
          <span className="text-muted-foreground">
            Don&apos;t have an account?
          </span>{" "}
          <Link
            href="/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signin;
