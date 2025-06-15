import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-primary/20 text-9xl font-bold">404</h1>
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
