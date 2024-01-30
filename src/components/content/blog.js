import React from "react";
import "./mainContainer.css";
export default function Blog() {
  return (
    <div className="main-container">
      Blog One of the most powerful features of react-error-boundary is the
      ability to reset the error boundary state, which means clearing the error
      and attempting to render the component tree again. This can be beneficial
      when an error may be transient, such as a network error that occurs due to
      a temporary disconnection. The error boundary can be reset using the
      resetErrorBoundary function provided to the fallback component. For
      instance, this function can be called in response to a button click,
      allowing users to retry a failed operation manually. The ErrorBoundary
      also accepts an onReset prop, a function that gets called right before the
      error state is reset. This function is useful for performing any cleanup
      or state reset in your app that should happen before re-rendering after an
      error. Lastly, the resetKeys prop is an array of values that, when
      changed, will trigger a reset of the error boundary. This can be useful
      when you know that changing certain props or state values should resolve
      the error. Here’s an example of how these props can be used:
    </div>
  );
}
