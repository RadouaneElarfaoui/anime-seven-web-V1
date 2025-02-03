export default function DataDeletion() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Data Deletion Instructions</h1>
      <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Delete Your Data</h2>
        <p>To delete your Anime-Seven account and associated data, please follow these steps:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Log in to your Anime-Seven account</li>
          <li>Navigate to the Account Settings page</li>
          <li>Scroll to the bottom and click on "Delete Account"</li>
          <li>Confirm your decision by entering your password</li>
          <li>Click "Permanently Delete My Account"</li>
        </ol>
        <p>Please note that this action is irreversible and will delete all your data associated with Anime-Seven.</p>
        <h2 className="text-2xl font-semibold">Data Retention</h2>
        <p>
          After account deletion, we may retain certain information as required by law or for legitimate business
          purposes. For more information, please refer to our Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions or concerns about data deletion, please contact our support team at
          support@anime-seven.com.
        </p>
      </div>
    </div>
  )
}

