import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Anime-Seven Documentation</h1>
      <p className="text-xl text-muted-foreground">
        Find all the information you need about Anime-Seven, including how to use our services and our legal policies.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/terms">Terms of Service</Link>
          </Button>
          <Button asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button asChild>
            <Link href="/data-deletion">Data Deletion</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

