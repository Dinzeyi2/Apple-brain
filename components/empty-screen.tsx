import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What specific marketing strategies has Apple employed to differentiate its brand from competitors?',
    message: 'What specific marketing strategies has Apple employed to differentiate its brand from competitors ?'
  },
  {
    heading: 'How does Apple integrate psychological elements into their product advertising to enhance consumer appeal?',
    message: 'How does Apple integrate psychological elements into their product advertising to enhance consumer appeal?'
  },
  {
    heading: 'What impact have Apple marketing campaians had on its alobal brand perception and consumer loyalty?',
    message: 'What impact have Apple marketing campaians had on its alobal brand perception and consumer loyalty?'
  },
  {
    heading: 'Can you explain how Apple marketing strategies differ from other tech companies?',
    message: 'Can you explain how Apple marketing strategies differ from other tech companies?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
