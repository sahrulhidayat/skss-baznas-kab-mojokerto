const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      question: "Apa itu BAZNAS?",
      answer:
        "BAZNAS adalah Badan Amil Zakat Nasional yang bertugas mengumpulkan dan mengelola zakat, infak, dan sedekah. Lembaga ini disahkan oleh pemerintah dan memiliki beberapa tingkatan, mulai dari pusat hingga daerah.",
    },
    {
      question: "Apa itu SKSS?",
      answer:
        "SKSS (Satu Keluarga Satu Sarjana) merupakan program beasiswa yang diadakan oleh BAZNAS Kabupaten Mojokerto. Program ini bertujuan untuk memberikan bantuan pendidikan kepada anak-anak dari keluarga kurang mampu agar dapat melanjutkan pendidikan ke jenjang yang lebih tinggi.",
    },
    {
      question: "Siapa saja yang berhak menerima beasiswa SKSS?",
      answer:
        "Seluruh warga Kabupaten Mojokerto yang memenuhi syarat dan ketentuan yang berlaku. Beasiswa ini ditujukan untuk anak-anak dari keluarga kurang mampu yang berprestasi dan memiliki potensi untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.",
    },
    {
      question: "Bagaimana cara menyalurkan zakat melalui BAZNAS?",
      answer:
        "Anda dapat menyalurkan zakat melalui transfer bank, layanan jemput zakat, atau datang langsung ke kantor BAZNAS terdekat. Anda bisa menghubungi kontak yang tertera di website resmi BAZNAS untuk informasi lebih lanjut.",
    },
    {
      question: "Apa saja program yang dijalankan oleh BAZNAS?",
      answer:
        "BAZNAS menjalankan berbagai program seperti bantuan pendidikan, kesehatan, pemberdayaan ekonomi, dan bantuan kemanusiaan. Anda bisa mengikuti kegiatan-kegiatan tersebut melalui website resmi BAZNAS atau media sosial kami.",
    },
    {
      question: "Apakah zakat yang disalurkan melalui BAZNAS sah dan amanah?",
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
