export default function AppointmentBanner() {
  return (
    <section className="py-16 bg-[#384766] text-white">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Looking for professional & trusted medical healthcare?</h2>
            <p className="text-gray-200">DON'T DELAY, MAKE AN APPOINTMENT TODAY</p>
          </div>
          <button className="bg-white text-[#384766] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
            MAKE APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}
