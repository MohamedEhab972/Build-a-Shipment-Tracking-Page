import { useMediaQuery } from "react-responsive";
import LargeStepper from "./LargeStepper";
import SmallStepper from "./SmallStepper";
import { useTranslation } from "react-i18next";
import { useContext, useMemo } from "react";
import { OrderContext } from "../../context/OrderContext";

const Stepper = () => {
  const { t } = useTranslation();
  const { order, OrderNumber } = useContext(OrderContext);

  const state = order?.CurrentStatus?.state;

  const steps = [
    "Shipment_Created",
    "PACKAGE_RECEIVED",
    "In_Transit",
    "OUT_FOR_DELIVERY",
    "Delivered",
  ];

  const orderN = useMemo(
    () => ({
      7234258: t("delivered"),
      9442984: t("cancelled"),
      1094442: t("delivered"),
    }),
    [t]
  );

  const currentStep = useMemo(
    () => state || orderN[OrderNumber],
    [state, OrderNumber]
  );

  const currentStepIndex = steps.indexOf(currentStep);

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return isLargeScreen ? (
    <LargeStepper currentStepIndex={currentStepIndex} steps={steps} t={t} />
  ) : (
    <SmallStepper currentStepIndex={currentStepIndex} steps={steps} t={t}/>
  );
};

export default Stepper;
