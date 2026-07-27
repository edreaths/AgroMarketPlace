import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfilePhoto from "@/components/profile/ProfilePhoto";
import PersonalInformation from "@/components/profile/PersonalInformation";
import ChangePassword from "@/components/profile/ChangePassword";
import DeleteAccount from "@/components/profile/DeleteAccount";

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <ProfileHeader />

        <div className="grid gap-6 lg:grid-cols-3">

          <ProfilePhoto />

          <div className="space-y-6 lg:col-span-2">

            <PersonalInformation />

            <ChangePassword />

            <DeleteAccount />

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}