"use client";

import { createUser } from "@/actions/usersCreateActions";
import { Button } from "@/components/myComponents/button";
import React from "react";

const page = () => {
  return (
    <div>
      Users
      <Button
        onClick={() => {
          createUser();
        }}
      >
        New User
      </Button>
    </div>
  );
};

export default page;
