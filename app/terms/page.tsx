export default function TermsOfService() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Anime-Seven, you agree to be bound by these Terms of Service. If you do not agree to
          these terms, please do not use our service.
        </p>
        <h2 className="text-2xl font-semibold">2. Description of Service</h2>
        <p>
          Anime-Seven provides [brief description of your service]. We reserve the right to modify or discontinue the
          service at any time without notice.
        </p>
        <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and for all activities that occur
          under your account.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

