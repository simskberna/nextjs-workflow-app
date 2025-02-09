import { auth } from "@/auth";
import Dashboard from "@/app/dashboard/components/dashboard-content";
import Navbar from "@/app/components/ui/navbar";

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name ?? "";
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar userName={userName} />
      <Dashboard />
    </div>
  );
}
