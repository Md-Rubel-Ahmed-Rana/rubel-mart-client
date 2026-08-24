"use client";

import {
  CalendarDays,
  CheckCircle2,
  Edit3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  UserRound,
  XCircle,
} from "lucide-react";

import { useGetCurrentUserQuery } from "@/apis/authApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ICurrentUser } from "@/types/auth.type";
import Image from "next/image";
import UserProfileError from "./error";

const UserProfile = () => {
  const { data, isLoading, isError } = useGetCurrentUserQuery();

  const user = data?.data as ICurrentUser | undefined;

  if (isLoading) {
    return (
      <div className="w-full h-40 flex justify-center items-center">
        <h1>Profile is loading...</h1>
      </div>
    );
  }

  if (isError || !user) {
    return <UserProfileError />;
  }

  const fullName = `${user.first_name} ${user.last_name}`;

  const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          My Profile
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your personal information and account details.
        </p>
      </div>

      <section className="relative overflow-hidden rounded-2xl border bg-card">
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-r from-primary via-secondary to-primary" />

        <div className="relative px-5 pb-6 pt-16 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
              <div className="relative shrink-0">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-card bg-muted shadow-lg sm:h-32 sm:w-32">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={`${fullName} profile`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary">
                      {user.first_name.charAt(0)}
                      {user.last_name.charAt(0)}
                    </span>
                  )}
                </div>

                {user.status === "ACTIVE" && (
                  <span
                    className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-card bg-success"
                    aria-label="Active"
                  />
                )}
              </div>

              <div className="text-center sm:pb-1 sm:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <h2 className="text-xl font-bold sm:text-2xl">{fullName}</h2>

                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {user.role}
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>

            <Button className="w-full sm:w-auto">
              <Edit3 className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <UserRound className="h-5 w-5 text-primary" />
              </div>

              <div>
                <CardTitle className="text-lg">Personal Information</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Your basic personal information.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <ProfileField
              icon={<User className="h-4 w-4" />}
              label="First Name"
              value={user.first_name}
            />

            <ProfileField
              icon={<User className="h-4 w-4" />}
              label="Last Name"
              value={user.last_name}
            />

            <ProfileField
              icon={<Mail className="h-4 w-4" />}
              label="Email Address"
              value={user.email}
            />

            <ProfileField
              icon={<Phone className="h-4 w-4" />}
              label="Phone Number"
              value={user.phone ?? "Not added yet"}
              muted={!user.phone}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
              </div>

              <div>
                <CardTitle className="text-lg">Account Overview</CardTitle>

                <p className="text-sm text-muted-foreground">
                  Account status and security.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5 p-5 sm:p-6">
            <AccountRow
              label="Account Status"
              value={user.status}
              type="status"
            />

            <AccountRow
              label="Email Verification"
              value={user.is_verified ? "Verified" : "Not Verified"}
              type={user.is_verified ? "verified" : "warning"}
            />

            <AccountRow label="Account Type" value={user.role} />

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-muted p-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Member Since</p>

                <p className="mt-0.5 text-sm font-medium">{memberSince}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Quick Actions</h2>

          <p className="text-sm text-muted-foreground">
            Manage other parts of your account.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <QuickAction
            icon={<Edit3 className="h-5 w-5" />}
            title="Edit Profile"
            description="Update your name, phone and profile photo."
          />

          <QuickAction
            icon={<MapPin className="h-5 w-5" />}
            title="My Addresses"
            description="Manage your delivery and billing addresses."
          />

          <QuickAction
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Security"
            description="Manage your password and account security."
          />
        </div>
      </section>
    </main>
  );
};

type ProfileFieldProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  muted?: boolean;
};

const ProfileField = ({
  icon,
  label,
  value,
  muted = false,
}: ProfileFieldProps) => {
  return (
    <div className="rounded-xl border bg-muted/30 p-4">
      <div className="mb-2 flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs font-medium">{label}</span>
      </div>

      <p
        className={`break-all text-sm font-medium ${
          muted ? "text-muted-foreground" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

type AccountRowProps = {
  label: string;
  value: string;
  type?: "status" | "verified" | "warning";
};

const AccountRow = ({ label, value, type }: AccountRowProps) => {
  const isPositive = type === "status" || type === "verified";

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>

      {type ? (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            isPositive
              ? "bg-success/10 text-success"
              : "bg-warning/10 text-warning"
          }`}
        >
          {isPositive ? (
            <CheckCircle2 className="h-3.5 w-3.5" />
          ) : (
            <XCircle className="h-3.5 w-3.5" />
          )}

          {value}
        </span>
      ) : (
        <span className="text-sm font-medium">{value}</span>
      )}
    </div>
  );
};

type QuickActionProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const QuickAction = ({ icon, title, description }: QuickActionProps) => {
  return (
    <button
      type="button"
      className="group flex w-full items-start gap-4 rounded-xl border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-1 text-sm leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </button>
  );
};

export default UserProfile;
