import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type BioSectionProps = {
  bio: string | null | undefined
}

export function BioSection({ bio }: BioSectionProps) {
  if (!bio) return null
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none dark:prose-invert">
          {bio.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 