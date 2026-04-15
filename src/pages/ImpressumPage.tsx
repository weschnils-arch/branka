export function ImpressumPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-24 md:pb-32 bg-[#FBFAF8]">
      <div className="mx-auto max-w-[820px] px-5 md:px-10 lg:px-20">
        <p className="section-label">Legal Notice</p>
        <h1 className="text-[clamp(36px,6vw,64px)] font-bold tracking-[-0.025em] leading-[1.05] text-[#4A4A4A] mb-10">
          Impressum / Legal Notice
        </h1>

        <div className="space-y-8 text-[15px] leading-[1.8] text-[#4A4A4A]">
          <section>
            <h2 className="text-[18px] font-semibold mb-3 text-[#6E6259]">Responsible for the content</h2>
            <p>
              BN Coaching & Health<br />
              Powered by B.P.P. d.o.o. — The Body Progress Principle<br />
              Branka Njegovec
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold mb-3 text-[#6E6259]">Contact</h2>
            <p>
              Email: <a href="mailto:mail@bncoachinghealth.com" className="text-[#6E6259] underline hover:text-[#9A9F7A]">mail@bncoachinghealth.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold mb-3 text-[#6E6259]">Disclaimer</h2>
            <p>
              The content of this website has been compiled with the utmost care. However, BN Coaching & Health assumes no liability for the accuracy, completeness, or timeliness of the information provided. All content is for informational purposes only and does not replace individual medical, nutritional, or training advice.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold mb-3 text-[#6E6259]">Copyright</h2>
            <p>
              All content, images, and design on this website are protected by copyright. Reproduction, distribution, or public display requires written permission from BN Coaching & Health / B.P.P. d.o.o.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold mb-3 text-[#6E6259]">External links</h2>
            <p>
              This website may contain links to external websites operated by third parties. BN Coaching & Health has no control over the content of these external websites and accepts no liability for them. Responsibility for the content of linked pages lies solely with the respective operators.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
