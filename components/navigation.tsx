import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Anime-Seven Docs
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/terms">Terms</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/privacy">Privacy</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/data-deletion">Data Deletion</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

