import Sidebar from "@/components/Sidebar";
import GeminiBody from "@/components/GeminiBody";

export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <GeminiBody />
    </div>
  );
}
