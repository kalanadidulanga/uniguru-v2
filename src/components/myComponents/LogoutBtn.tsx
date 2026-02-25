import React from "react";
import { Button } from "@/components/myComponents/button";
// import { logout } from "@/actions/auth";
import { LogOut } from "lucide-react";
import { handleSignOut } from "@/actions/authActions";

const LogoutBtn = ({ className }: any) => {
  return (
    <form action={handleSignOut}>
      <Button variant={"outline"} size={"icon"} className={className}>
        <LogOut />
      </Button>
    </form>
  );
};

export default LogoutBtn;
