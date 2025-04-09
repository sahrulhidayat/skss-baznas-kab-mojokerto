import Image from "next/image";

const TestimonialCard = ({
  imageSrc,
  name,
  profession,
  testimonial,
}: {
  imageSrc: string;
  name: string;
  profession: string;
  testimonial: string;
}) => {
  return (
    <div
      className="flex rounded-4xl border-2 border-white/70 bg-white/70 p-4 backdrop-blur-md"
    >
      <div className="rounded-3xl h-[200px] w-[150px] overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt="testimonials"
          width={150}
          height={200}
          className="object-cover object-center h-full w-full select-none pointer-events-none"
        />
      </div>
      <div className="px-5 space-y-1 max-h-[200]">
        <div>
          <h4 className="text-lg md:text-2xl font-bold select-none pointer-events-none">
            {name}
          </h4>
          <p className="text-sm leading-4 md:leading-5 text-emerald-600 italic select-none pointer-events-none ">
            {profession}
          </p>
        </div>
        <p className="text-sm leading-4 md:leading-4.5 select-none pointer-events-none">&quot;{testimonial}&quot;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
