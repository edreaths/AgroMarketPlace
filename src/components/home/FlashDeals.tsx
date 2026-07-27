import { Flame } from "lucide-react";
import { flashDeals } from "@/data/flashDeals";
import FlashDealCard from "@/components/common/FlashDealCard";

export default function FlashDeals() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center gap-3">
          <Flame className="text-orange-600" size={34} />

          <h2 className="text-4xl font-bold">
            Flash Deals
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {flashDeals.map((deal) => (
            <FlashDealCard
              key={deal.id}
              deal={deal}
            />
          ))}
        </div>

      </div>
    </section>
  );
}