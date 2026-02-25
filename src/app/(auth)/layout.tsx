import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const Layout = async ({ children }: any) => {
  const session = await getSession();

  // Handle redirection based on user role
  if (session?.user?.role) {
    switch (session.user.role) {
      case "superadmin":
        return redirect("/superadmin");
      case "partner":
        return redirect("/partner");
      case "student":
        return redirect("/student");
      case "admin":
        return redirect("/admin");
      default:
        return redirect("/");
    }
  }

  // If no valid role or session, we can optionally throw an error or handle it differently
  return <>{children}</>;
};

export default Layout;
