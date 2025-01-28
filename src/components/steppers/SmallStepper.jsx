const SmallStepper = ({ currentStepIndex, steps, t }) => {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="flex my-5 items-center flex-col justify-center font-[sans-serif] w-max">
      {steps?.map((step, index) => (
        <div className="flex items-center flex-col relative" key={step}>
          <div
            className={`absolute top-0 ${
              lang === "ar" ? "right-full mr-4" : "left-full ml-4"
            } w-max`}
          >
            <h6 className="text-sm font-bold text-gray-800 dark:text-white">
              {t(step)}
            </h6>
          </div>
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] border-2 ${
              index <= currentStepIndex
                ? "border-alternativecolor bg-alternativecolor"
                : "border-gray-300 bg-gray-200"
            } flex items-center justify-center rounded-full`}
          >
            {index <= currentStepIndex && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
              </svg>
            )}
          </div>
          {index < steps?.length - 1 && (
            <div
              className={`h-16 ${
                index < currentStepIndex
                  ? "border-l-2 border-alternativecolor border-dashed"
                  : "border-l-2 border-gray-300 border-dashed"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SmallStepper;
