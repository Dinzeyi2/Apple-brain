import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'How has Apple marketed itself differently from competitors?',
    message: 'How has Apple marketed itself differently from competitors?
  },
  {
    heading: 'How does Apple use psychology in ads to attract customers?',
    message: 'How does Apple use psychology in ads to attract customers?'
  },
  {
    heading: 'How do Apple ads affect its global brand and customer loyalty?',
    message: 'How do Apple ads affect its global brand and customer loyalty?'
  },
  {
    heading: 'Explain Apple marketing strategies versus other tech companies.',
    message: 'Explain Apple marketing strategies versus other tech companies.'
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
