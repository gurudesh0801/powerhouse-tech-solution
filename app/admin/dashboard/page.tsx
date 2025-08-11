"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const authData = localStorage.getItem("adminAuth");
    if (!authData) {
      router.push("/login");
      return;
    }
    const { admin, key } = JSON.parse(authData);
    if (!admin || key !== process.env.NEXT_PUBLIC_ADMIN_KEY) {
      router.push("/login");
    }
  }, [router]);

  return <div>Welcome to Admin Dashboard</div>;
}
