import { useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Stepper from "../../components/steppers/Stepper";
import StepperDetails from "../../components/steppers/StepperDetails";
import { OrderContext } from "../../context/OrderContext";
import { useMediaQuery } from "react-responsive";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Home() {
  const { t } = useTranslation();
  let { order, Error, OrderNumber, Spinner } = useContext(OrderContext);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [expanded, setExpanded] = useState(false);

  const lang = localStorage.getItem("i18nextLng");

  const formatDateShort = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", options);
  };

  const orderN = useMemo(
    () => ({
      7234258: t("delivered"),
      9442984: t("cancelled"),
      1094442: t("delivered"),
    }),
    [t]
  );

  if (Spinner) {
    return (
      <div className="lodes absolute rounded-xl w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      {Error ? (
        <div className="pt-[144px] bg-[#F3FAFB] my-5 dark:bg-gray-900">
          <p className="font-rubik text-center text-xl text-[#667085] my-4 font-normal leading-4 tracking-wide underline-offset-auto decoration-skip-ink-none dark:text-white">
            {t("order")} {OrderNumber}
          </p>
          <div className="container mx-auto py-5">
            <div
              className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                className="shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div>
                <span className="font-medium">{t("no_record_found")}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            order
              ? "container mx-auto pt-20"
              : "pt-[300px] bg-[#F3FAFB] my-5 dark:bg-gray-900"
          }
        >
          {order ? (
            <div>
              <div className="block w-12/12  p-10 pb-10 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <p className="font-rubik text-[#667085] text-xs font-normal leading-4 tracking-wide underline-offset-auto decoration-skip-ink-none dark:text-white">
                  {t("order")} {order?.TrackingNumber || "123456789"}
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {orderN[OrderNumber] ? (
                    orderN[OrderNumber]
                  ) : (
                    <div>
                      {t("arriving_by")}{" "}
                      <span className="text-alternativecolor">
                        {order?.PromisedDate
                          ? formatDateShort(order?.PromisedDate)
                          : "No Data..."}
                      </span>
                    </div>
                  )}
                </h5>
                {orderN[OrderNumber] === t("cancelled") ? null : (
                  <div>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">
                      {t("order_expected_arrival")}
                    </p>
                    <hr />
                    <div
                      className={
                        isLargeScreen ? "flex justify-center items-center" : ""
                      }
                    >
                      <Stepper />
                    </div>
                  </div>
                )}
              </div>
              {expanded && (
                <div className="p-10">
                  <p className="font-rubik my-10 text-[#667085] text-2xl font-normal leading-4 tracking-wide underline-offset-auto decoration-skip-ink-none dark:text-white">
                    {t("tracking_details")}
                  </p>
                  <StepperDetails />
                </div>
              )}

              <div className="flex justify-center items-center">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex my-4 items-center gap-1 text-alternativecolor text-base font-semibold px-4 py-2 rounded-md"
                >
                  {expanded ? "Less" : "More"}{" "}
                  {expanded ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-xl text-[#667085] dark:text-white">
              <p>{t("no_order_data")}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
