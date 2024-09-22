import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Give me jensen  huang  contact  information ',
    message: 'Give me jensen  huang  contact  information '
  },
  {
    heading: ' I  Have  an ai startup and i need  an investor ',
    message: ' I  Have  an ai startup and i need  an investor '
  },
  {
    heading: 'I  Have  a real state  startup and i need  an investor',
    message: 'I  Have  a real state  startup and i need  an investor'
  },
  {
    heading: 'What  is  the best investor for my  bakery companies',
    message: 'What  is  the best investor for my  bakery companies'
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
