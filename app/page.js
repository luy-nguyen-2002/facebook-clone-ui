import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Login from "@/components/Login";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <Login />;
  }

  return (
    <div>
      <Header />
      <main className="flex bg-gray-100">
        {/* Left sidebar */}
        <Sidebar />
        {/* Feed create posts and posts */}
        <Feed/>
        {/* Right sidebar */}
        <RightSidebar/>
      </main>
    </div>
  );
}
