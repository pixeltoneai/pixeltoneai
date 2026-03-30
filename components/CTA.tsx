export default function CTA() {
  return (
<section id="contact" className="bg-white text-black py-20 px-6">      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Take Your Business Online?
        </h2>

        <p className="mt-4 text-gray-600">
          We’ll create a website and system that helps you get customers — not just visitors.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a 
  href="https://wa.me/919512260104" 
  target="_blank"
  className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition inline-block hover:shadow-lg hover:shadow-black/30"
>
            Chat on WhatsApp
          </a>

          <a 
          href="mailto:pixeltoneai@gmail.com"
          className="border border-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition inline-block hover:shadow-lg hover:shadow-black/20"
>
            Email Us
          </a>

        </div>

      </div>
    </section>
  );
}