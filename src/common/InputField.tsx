import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label: string;
  error?: string;
  register?: UseFormRegisterReturn;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const InputField = ({
  label,
  error,
  register,
  className,
  leftIcon,
  rightIcon,
  id,
  type,
  ...props
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  const isPassword = type === "password";

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full">
      <div className="relative">
        {leftIcon && (
          <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
            {leftIcon}
          </div>
        )}

        <Input
          id={inputId}
          {...register}
          {...props}
          type={inputType}
          placeholder=" "
          className={cn(
            "peer h-14 w-full rounded-md border bg-background px-3 text-sm",
            "text-foreground shadow-none outline-none",
            "placeholder:text-transparent",
            "border-input",
            "hover:border-primary/60",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-60",
            "pt-3",

            leftIcon && "pl-10",

            (rightIcon || isPassword) && "pr-10",

            error &&
              "border-destructive focus:border-destructive focus:ring-destructive/20",

            className,
          )}
        />

        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 z-10",
            "-translate-y-1/2 px-1 text-sm font-medium",
            "text-muted-foreground transition-all duration-200",

            "peer-focus:top-0",
            "peer-focus:-translate-y-1/2",
            "peer-focus:text-xs",
            "peer-focus:text-primary",

            "peer-not-placeholder-shown:top-0",
            "peer-not-placeholder-shown:-translate-y-1/2",
            "peer-not-placeholder-shown:text-xs",

            "bg-background",

            error &&
              "peer-focus:text-destructive peer-not-placeholder-shown:text-destructive",

            leftIcon && "left-10",
          )}
        >
          {label}
        </label>

        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        ) : (
          rightIcon && (
            <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
};

export default InputField;
