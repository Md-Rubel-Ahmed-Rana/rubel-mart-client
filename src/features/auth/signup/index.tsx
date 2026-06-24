import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SignupForm from "./signup-form";

const Signup = () => {
  return (
    <Card className="border-border shadow-lg">
      <CardContent className="space-y-8 p-6 md:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>

          <p className="text-muted-foreground">
            Join Rubel Mart and start shopping today.
          </p>
        </div>

        <SignupForm />

        <div className="text-center text-sm">
          <span className="text-muted-foreground">
            Already have an account?
          </span>{" "}
          <Link
            href="/signin"
            className="text-primary font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signup;
