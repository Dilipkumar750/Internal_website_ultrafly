import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      <div className=" grid md:grid-cols-3 gap-10 ">
        {cardList.map((card, id) => (
          <div
            data-aos={card.effect}
            data-aos-duration={card.duration}
            key={id}
            className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]"
          >
            <img src={card.img} alt={card.title} className=" w-[75px] mb-4" />
            <p className=" text-[24px] font-bold uppercase mb-7">
              {card.title}
            </p>
            <p className="text-[15px] font-medium leading-2 w-full">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutCarts;
