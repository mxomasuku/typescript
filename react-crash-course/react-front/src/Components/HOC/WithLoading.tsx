import React from "react";

// Higher-Order Component that adds loading state handling
const WithLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ isLoading, ...props }: P & { isLoading: boolean }) => {
    // If the loading flag is true, show a loading message or skeleton
    console.log("hoc hco hoc")
    if (isLoading) {
      return <div>Loading...</div>; // You can customize this or add a better loading indicator
    }

    // Otherwise, render the wrapped component with its props
    return <Component {...(props as P)} />;
  };
};

export default WithLoading;