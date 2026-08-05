'use client'

import { useForm } from '@formspree/react'
import { useState } from 'react'
import FormCode from '../formCode/FormCode'
import ThankYouText from '../thankYouText/ThankYouText'

const formGroupClass = 'mb-[3rem]'

const fieldClass =
  'mt-[1rem] w-[calc(100%-2rem)] resize-none rounded-[1rem] border border-line bg-[#011221] p-[1rem] font-mono text-label text-muted transition-[border] duration-200 focus:border-2 focus:border-muted focus:outline-none'

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID
  const [state, handleSubmit, reset] = useForm(formId || 'not-configured')

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  // const [isSuccess, setSuccess] = useState(false)

  const handleChange = event => {
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const handleReset = () => {
    setInputs({ name: '', email: '', message: '' })
    reset()
  }

  const handleFormSubmit = event => {
    if (!formId) {
      event.preventDefault()
      return
    }

    handleSubmit(event)
  }

  return (
    <>
      <div className="lg:flex lg:min-h-[60rem] lg:w-1/2 lg:max-w-[calc((100vw-12.38vw-3.81vw-2rem-1px)/2)] lg:justify-center lg:overflow-x-auto lg:border-r lg:border-line">
        {state.succeeded ? (
          <ThankYouText handleReset={handleReset} />
        ) : (
          <form
            className="mx-[2rem] mt-[8rem] lg:mx-0 lg:mt-[12rem] lg:w-[20.87vw]"
            onSubmit={handleFormSubmit}
          >
            <div className={formGroupClass}>
              <label className="text-label text-muted">_name:</label>
              <input
                className={fieldClass}
                id="name"
                name="name"
                type="text"
                required
                onChange={handleChange}
                value={inputs.name}
              />
            </div>
            <div className={formGroupClass}>
              <label className="text-label text-muted">_email:</label>
              <input
                className={fieldClass}
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
                value={inputs.email}
              />
            </div>
            <div className={formGroupClass}>
              <label className="text-label text-muted">_message:</label>
              <textarea
                className={`${fieldClass} h-[19rem]`}
                id="message"
                name="message"
                required
                onChange={handleChange}
                value={inputs.message}
              />
            </div>
            <div className={formGroupClass}>
              <button
                className="cursor-pointer rounded-[1rem] border border-line bg-line px-[2rem] py-[1rem] font-mono text-code text-foreground transition-[border,background-color] duration-400 hover:border-foreground hover:bg-panel"
                type="submit"
                disabled={state.submitting || !formId}
              >
                {state.submitting
                  ? 'submitting..'
                  : formId
                    ? 'submit-message'
                    : 'form-not-configured'}
              </button>
            </div>
          </form>
        )}
      </div>
      <FormCode inputs={inputs} />
    </>
  )
}
