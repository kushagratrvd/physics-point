export default function GoogleMapComponent() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.5982486539397!2d79.62606477544314!3d27.357025940855525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3160931f50ed%3A0xaf1672adfb84f6a3!2sPHYSICS%20POINT%20BY%20ANAND%20BHAIYA!5e0!3m2!1sen!2sin!4v1743603083836!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Physics Point Location"
        className="rounded-lg"
      ></iframe>
    </div>
  )
}

