interface ProductGalleryProps {
  image: string;
  name: string;
}

export default function ProductGallery({
  image,
  name,
}: ProductGalleryProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <img
        src={image}
        alt={name}
        className="h-[500px] w-full rounded-xl object-cover transition duration-300 hover:scale-105"
      />
    </div>
  );
}