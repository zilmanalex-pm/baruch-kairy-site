"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { PaperPlaneTilt, CheckCircle, WarningCircle } from "@phosphor-icons/react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setErrorMessage("משהו השתבש. נסו שוב או פנו אלינו בטלפון.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("שגיאת תקשורת. בדקו את החיבור לאינטרנט ונסו שוב.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-3xl px-lg">
        <CheckCircle size={56} weight="light" className="text-primary mb-lg" />
        <h3 className="font-heading text-[1.5rem] font-bold text-text mb-sm">
          ההודעה נשלחה בהצלחה
        </h3>
        <p className="font-body text-base text-text-secondary mb-xl max-w-[400px]">
          תודה שפניתם. אחזור אליכם תוך יום עסקים אחד.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setStatus("idle")}
        >
          שליחת הודעה נוספת
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
      {/* Web3Forms hidden fields */}
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
      />
      <input type="hidden" name="subject" value="פנייה חדשה מהאתר — ברוך קאירי" />
      <input type="hidden" name="from_name" value="אתר ברוך קאירי" />
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <Input
        name="name"
        label="שם מלא"
        placeholder="השם שלכם"
        required
        autoComplete="name"
      />

      <Input
        name="phone"
        label="טלפון"
        type="tel"
        placeholder="050-000-0000"
        required
        autoComplete="tel"
        dir="ltr"
        className="text-start"
      />

      <Textarea
        name="message"
        label="איך אפשר לעזור?"
        placeholder="ספרו בקצרה מה מביא אתכם..."
        required
        rows={5}
      />

      {status === "error" && (
        <div className="flex items-center gap-sm text-error" role="alert">
          <WarningCircle size={20} weight="bold" className="shrink-0" />
          <p className="font-body text-sm">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" ? (
          "שולח..."
        ) : (
          <span className="flex items-center gap-sm">
            <PaperPlaneTilt size={20} weight="bold" />
            שליחה
          </span>
        )}
      </Button>
    </form>
  )
}
