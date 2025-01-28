import { useTranslation } from "react-i18next";
import { NavbarComponent } from "../../../components/navbar/Navbar";
import Location from "../../../assets/Location.png";
import { SearchBar } from "../../../components/searchBar/SearchBar";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <NavbarComponent />
      <div className="bg-[#F3FAFB] dark:bg-gray-900 h-[338px] flex items-center justify-center flex-col md:gap-3">
        <img
          src={Location}
          alt={t("location_icon")}
          className="w-[230px] h-[110px]"
        />
        <h3 className="text-center text-3xl md:text-5xl font-extrabold leading-[56px] tracking-[-0.02em] font-cairo underline-from-font decoration-skip-ink-none dark:text-white">
          {t("track_your_order")}
        </h3>
        <p className="text-center block md:hidden p-3 text-base md:text-xl leading-[56px] tracking-[-0.02em] font-cairo underline-from-font decoration-skip-ink-none dark:text-gray-300">
          {t("All order updates will be available through this link.")}
        </p>
        <div className="absolute hidden md:block bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
