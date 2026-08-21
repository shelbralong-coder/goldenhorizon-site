import { cn } from "@/lib/cn";

export function SubmitButton({
  children,
  submitting = false,
  className,
}: {
  children: React.ReactNode;
  submitting?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-navy bg-navy px-8 py-4 text-[0.95rem] font-medium text-white transition-colors duration-150 hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
    >
      {children}
    </button>
  );
}
