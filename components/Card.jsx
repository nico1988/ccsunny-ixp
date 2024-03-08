import Image from "next/image";

export default function Card({ image, avatarImage, date, title, location }) {
  return (
    <div className="bg-white p-5 rounded-md">
        <div className="relative rounded-lg overflow-hidden mb-3">
        <Image src={image} alt={title} width={145} height={132} />
        <h2 className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-1 rounded-lg text-center">{title}</h2>
        </div>
        <div className="flex justify-between">
            <div>
                <div>{date}</div>
                <div>{location}</div>
            </div>
            <div>
                <Image src={avatarImage} alt={title} width={30} height={30} className="rounded-full" />
            </div>
        </div>
    </div>
  );
}