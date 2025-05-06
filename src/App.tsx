import { Routes, Route } from "react-router";
import {
  CREDITS_GAME_FINAL_PAYMENT_SCHEDULE,
  CREDITS_GAME_FINAL_PROTECTION,
  CREDITS_GAME_STUB,
} from "./constants/credits-game";
import { CreditsGameFinal } from "./components/credits-game-final";
import { CreditsGameStub } from "./components/credits-game-stub";

export const App = () => {
  return (
    <Routes>
      <Route
        path={CREDITS_GAME_FINAL_PROTECTION}
        element={<CreditsGameFinal variant="protection" />}
      />
      <Route
        path={CREDITS_GAME_FINAL_PAYMENT_SCHEDULE}
        element={<CreditsGameFinal variant="paymentSchedule" />}
      />
      <Route path={CREDITS_GAME_STUB} element={<CreditsGameStub />} />
    </Routes>
  );
};
