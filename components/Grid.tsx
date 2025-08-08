import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="lg:mb-16">
      <BentoGrid className="w-full pt-10 sm:pt-10 pb-20 sm:pb-10 "> 
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            anchorId={item.anchorId}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;