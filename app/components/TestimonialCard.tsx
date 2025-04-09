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
    <div className="xl:flex rounded-4xl border-2 border-white/70 bg-white/70 p-2 md:p-4 backdrop-blur-md">
      <div className="rounded-3xl h-[125] w-[90] md:h-[160px] md:w-[110px] overflow-hidden flex-shrink-0 mx-auto mb-1 xl:mx-0">
        <Image
          src={imageSrc}
          alt="testimonials"
          width={150}
          height={200}
          className="object-cover object-center h-full w-full select-none pointer-events-none"
        />
      </div>
      <div className="md:px-4 space-y-1 max-h-[200] text-center xl:text-left">
        <div>
          <h4 className="text-sm sm:text-lg md:text-2xl font-bold select-none pointer-events-none">
            {name}
          </h4>
          <p className="text-xs sm:text-sm leading-4 md:leading-5 text-emerald-600 italic select-none pointer-events-none ">
            {profession}
          </p>
        </div>
        <p className="text-xs sm:text-sm leading-4 md:leading-4.5 select-none pointer-events-none">
          &quot;{testimonial}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
