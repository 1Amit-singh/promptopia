"use client";
import EditPromptContent from "./EditPromptContent";
import React, { Suspense } from "react";

const EditPrompt = () => {
  return (
    <Suspense>
      <EditPromptContent />
    </Suspense>
  );
};

export default EditPrompt;
