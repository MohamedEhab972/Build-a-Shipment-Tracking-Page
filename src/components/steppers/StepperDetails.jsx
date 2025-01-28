import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { OrderContext } from "../../context/OrderContext";
import { useTranslation } from "react-i18next";

export default function StepperDetails() {
  const { order } = useContext(OrderContext);
  const { t } = useTranslation();

  const [showAll, setShowAll] = useState(false);
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: [0, 0.3, 0.5, 1],
      x: 0,
    },
  };

  const lang = localStorage.getItem("i18nextLng");

  function formatDateTime(timestamp, type) {
    const date = new Date(timestamp);
    if (type === "date") {
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleString(
        lang === "ar" ? "ar-EG" : "en-US",
        dateOptions
      );
    } else if (type === "time") {
      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      return date.toLocaleString(
        lang === "ar" ? "ar-EG" : "en-US",
        timeOptions
      );
    }
    return "Invalid type. Use 'date' or 'time'.";
  }

  const visibleItems = showAll
    ? order?.TransitEvents
    : order?.TransitEvents?.slice(0, 3);

  return (
    <div>
      <motion.ol
        className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 1 }}
      >
        {visibleItems
          ? visibleItems.map((item, index) => (
              <motion.li
                className="mb-10 ms-6"
                key={item?.timestamp || index}
                variants={itemVariants}
              >
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D0D5DD] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
                <h3 className="font-medium leading-tight dark:text-white">
                  {formatDateTime(item?.timestamp, "date")}
                </h3>
                <div className="block w-12/12 p-3 mt-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    {`${t(item.state)}`}{" "}
                  </p>
                  <p className="font-normal mb-2 text-gray-700 dark:text-gray-400">
                    {formatDateTime(item?.timestamp, "time")}
                  </p>
                </div>
              </motion.li>
            ))
          : t("no_data_found")}{" "}
      </motion.ol>
      <div className="flex justify-center items-center">
        {order?.TransitEvents?.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 px-4 py-2 text-alternativecolor dark:text-blue-500 flex items-center"
          >
            {showAll ? t("collapse_history▲") : t("expand_history▼")}{" "}
          </button>
        )}
      </div>
    </div>
  );
}
