const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      question: "Apa itu BAZNAS?",
      answer:
        "BAZNAS adalah Badan Amil Zakat Nasional yang bertugas mengelola zakat, infak, dan sedekah secara nasional.",
    },
    {
      question: "Bagaimana cara menyalurkan zakat melalui BAZNAS?",
      answer:
        "Anda dapat menyalurkan zakat melalui transfer bank, layanan online, atau datang langsung ke kantor BAZNAS terdekat.",
    },
    {
      question: "Apa saja program yang dijalankan oleh BAZNAS?",
      answer:
        "BAZNAS menjalankan berbagai program seperti bantuan pendidikan, kesehatan, pemberdayaan ekonomi, dan bantuan kemanusiaan.",
    },
    {
      question: "Apakah zakat yang disalurkan melalui BAZNAS amanah?",
      answer:
        "Ya, BAZNAS dikelola secara profesional dan transparan sesuai dengan syariat Islam dan diawasi oleh pemerintah.",
    },
  ];

  return (
    <div className="h-6/12 max-w-4xl mx-auto px-8 py-6 md:py-12 object-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-6 mb-4">
        Pertanyaan yang Sering Diajukan
      </h1>

      {faqs.map((faq, index) => (
        <div key={index} className="py-2">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-sm sm:text-lg font-semibold ">
              {faq.question}
            </div>
            <div className="collapse-content text-sm sm:text-lg">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAskedQuestions;
