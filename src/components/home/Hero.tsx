import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <Badge>
            🌾 Africa's Trusted Agricultural Marketplace
          </Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
            Buy Fresh Farm Products
            <br />
            Directly From Trusted Farmers
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            AgroMarketPlace connects farmers, vendors and buyers across
            Nigeria with secure payments, fast delivery and quality
            agricultural products.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <Button>
              Browse Products
            </Button>

            <Button variant="outline">
              Become a Vendor
            </Button>

          </div>

          <div className="mt-12 flex gap-10">

            <div>
              <h2 className="text-3xl font-bold text-green-700">
                10K+
              </h2>

              <p className="text-gray-500">
                Farmers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700">
                50K+
              </h2>

              <p className="text-gray-500">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700">
                25K+
              </h2>

              <p className="text-gray-500">
                Customers
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          <div className="flex h-[500px] w-full max-w-md items-center justify-center rounded-3xl bg-green-100 shadow-xl">

            <span className="text-center text-xl font-semibold text-green-700">
              Hero Image
              <br />
              (Coming Soon)
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;