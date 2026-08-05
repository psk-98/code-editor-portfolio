'use client'

import type { FormInputs } from '@/types/content'

export default function FormCode({ inputs }: { inputs: FormInputs }) {
  if (!inputs) return null

  return (
    <div className="hidden lg:flex lg:min-w-1/2 lg:max-w-[calc((100vw-12.38vw-3.81vw-2rem-1px)/2)] lg:pt-[12rem] lg:[&_code]:flex lg:[&_code]:text-body lg:[&_code]:leading-[1.5] lg:[&_code>*]:text-body">
      <pre className="language-js">
        <code>
          <span className="block">
            <span className="token keyword">const</span> message{' '}
            <span className="token operator">=</span>{' '}
            <span className="token punctuation">{`{`}</span>
          </span>

          <span className="block pl-[1rem]">
            <span className="token literal-property property">name</span>
            <span className="token operator">:</span>{' '}
            <span className="token string">&quot;{inputs.name}&quot;</span>,
          </span>

          <span className="block pl-[1rem]">
            <span className="token literal-property property">email</span>
            <span className="token operator">:</span>{' '}
            <span className="token string">&quot;{inputs.email}&quot;</span>,
          </span>

          <span className="block pl-[1rem]">
            <span className="token literal-property property">message</span>
            <span className="token operator">:</span>{' '}
            <span className="token string whitespace-break-spaces">
              &quot;{inputs.message}&quot;
            </span>
          </span>

          <span className="token punctuation block">{`}`}</span>
        </code>
      </pre>
    </div>
  )
}
