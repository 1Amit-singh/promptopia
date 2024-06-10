import EditPromptContent from "./EditPromptContent";
import React, { Suspense } from "react";

const EditPrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPromptContent />
    </Suspense>
  );
};

export default EditPrompt;
