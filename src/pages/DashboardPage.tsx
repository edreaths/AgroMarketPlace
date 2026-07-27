import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import UserProfileCard from "@/components/dashboard/UserProfileCard";
import AccountOverview from "@/components/dashboard/AccountOverview";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentOrders from "@/components/dashboard/RecentOrders";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <DashboardHeader />

        <div className="grid gap-6 lg:grid-cols-3">

          <UserProfileCard />

          <div className="space-y-6 lg:col-span-2">

            <AccountOverview />

            <QuickActions />

            <RecentOrders />

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}