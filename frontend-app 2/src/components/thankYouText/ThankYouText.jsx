export default function ThankYouText({ handleReset }) {
  return (
    <div className="mt-[6rem] flex w-full text-center lg:m-0">
      <div className="lg:flex lg:min-w-1/2 lg:max-w-[calc((100vw-12.38vw-3.81vw-2rem-1px)/2)] lg:flex-col lg:items-center lg:justify-center lg:border-r lg:border-line">
        <h2 className="text-[3rem]">Thank you! 🤘</h2>
        <p className="m-[2rem] text-body text-muted lg:mx-[8rem]">
          Your message has been sent. I will get back to you ASAP
        </p>
        <button
          className="cursor-pointer rounded-[1rem] border border-line bg-line px-[2rem] py-[1rem] font-mono text-code text-foreground transition-[border,background-color] duration-400 hover:border-foreground hover:bg-panel"
          onClick={handleReset}
          type="button"
        >
          send-new-message
        </button>
      </div>
    </div>
  )
}
