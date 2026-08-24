import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const UserProfileError = () => {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex min-h-100 items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center px-6 py-10 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
              <XCircle className="h-7 w-7 text-destructive" />
            </div>

            <h2 className="text-lg font-semibold">Unable to load profile</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              We could not retrieve your profile information. Please try again
              later.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default UserProfileError;
