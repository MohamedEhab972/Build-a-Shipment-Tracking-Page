import React from "react";

const LargeStepper = React.memo(function LargeStepper({
  currentStepIndex,
  steps,
  t,
}) {

  return (
    <ol className="flex my-5 items-center justify-center flex-col md:flex-row w-6/12 mt-5">
      {steps?.map((step, index) => (
        <li
          key={step}
          className={`flex w-full items-center ${
            index < steps?.length - 1
              ? "after:content-[''] after:w-full after:h-1 after:border-b after:inline-block"
              : ""
          } ${
            index <= currentStepIndex
              ? "after:border-[#0098A5] text-alternativecolor dark:text-blue-500"
              : "after:border-dashed after:border-gray-300 text-gray-400 dark:text-gray-500"
          }`}
        >
          <span
            className={`flex relative items-center justify-center w-6 h-6 lg:h-7 lg:w-7 rounded-full shrink-0 ${
              index <= currentStepIndex
                ? "bg-alternativecolor text-white dark:bg-blue-800"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {index < currentStepIndex && (
              <svg
                className="w-2.5 h-2.5 lg:w-4 lg:h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            )}
            {index === currentStepIndex && (
              <svg
                className="w-2.5 h-2.5 lg:w-4 lg:h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M13.293 4.293a1 1 0 0 1 0 1.414L7.414 11 4.707 8.293a1 1 0 0 1 1.414-1.414L7 8.586l5.879-5.879a1 1 0 0 1 1.414 0z"
                />
              </svg>
            )}
            <p className="absolute w-32 text-center text-black -bottom-10 left-1/2 transform -translate-x-1/2 text-[12px] font-medium dark:text-white">
              {t(step)}
            </p>
          </span>
        </li>
      ))}
    </ol>
  );
});

export default LargeStepper;
