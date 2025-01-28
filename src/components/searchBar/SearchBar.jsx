import { useFormik } from "formik";
import { useContext } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { OrderContext } from "../../context/OrderContext";
import { useTranslation } from "react-i18next";

export function SearchBar() {
  const { getOrder } = useContext(OrderContext);
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  function handelSubmit(e) {
    getOrder(e.code);
  }

  let formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: handelSubmit,
  });

  return (
    <form dir={lang === "ar" ? "rtl" : "ltr"} onSubmit={formik.handleSubmit}>
      <div
        className={`max-w-md flex w-[395px] h-[68px] items-center border-2 border-gray-300 dark:border-gray-700 rounded-md ${
          lang === "ar"
            ? "rounded-tr-xl rounded-br-xl"
            : "rounded-tl-xl rounded-bl-xl"
        } `}
      >
        <button
          type="submit"
          className={`px-3 h-full text-4xl font-bold text-white bg-maincolor ${
            lang === "ar"
              ? "rounded-tr-xl rounded-br-xl"
              : "rounded-tl-xl rounded-bl-xl"
          } `}
        >
          <HiMagnifyingGlass />
        </button>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.code}
          name="code"
          type="text"
          id="code"
          dir="rtl"
          placeholder={t("tracking_code")}
          required
          className="p-2  w-full h-full ltr:text-right border-none focus:outline-none focus:ring-2 focus:ring-[rgba(0,152,165,.2)] focus:ring-offset-2 focus:ring-offset-[#e4e7ec] dark:bg-gray-800 dark:text-white rounded-md transition-all duration-300"
        />
      </div>
    </form>
  );
}
