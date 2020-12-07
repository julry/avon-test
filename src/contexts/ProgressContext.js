import React from "react";

export const ProgressContext = React.createContext(null);

export const ProgressProvider = ProgressContext.Provider;
export const ProgressConsumer = ProgressContext.Consumer;