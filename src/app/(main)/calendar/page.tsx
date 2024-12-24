"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";

// testId設定
export const testIdByCalender = "calender";

const Calender = () => {
  return (
    <div data-testid={testIdByCalender}>
      <FullCalendar
        locale={jaLocale}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        contentHeight={"auto"}
        headerToolbar={{ left: "title", center: "", right: "prev today next" }}
      />
    </div>
  );
};

export default Calender;
