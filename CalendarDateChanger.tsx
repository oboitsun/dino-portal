import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../../store";
import moment from "moment";
import { Icon } from "../../Icon/Icon";
import { setDateForCalendar } from "../../../../store/reducers/calendar/actions";
import "./CalendarDateChanger.scss";

export const CalendarDateChanger = (props: any) => {
  const dispatch = useDispatch();
  const calendarDate = useSelector((state: IAppState) => state.calendar.calendarDate);
  const calendarView = useSelector((state: IAppState) => state.settings.calendarView);

  useEffect(() => {
    props.onNavigate("Date", calendarDate);
    // eslint-disable-next-line
  }, []);

  const handleChangeCalendar = (action: "prev" | "next") => {
    let newDate: Date | string;
    const addingValue = action === "prev" ? -1 : 1;
    if (calendarView === "day") {
      newDate = moment(calendarDate).add(addingValue, "days").toDate();
    } else if (calendarView === "week") {
      newDate = moment(calendarDate).add(addingValue, "weeks").toDate();
    } else {
      newDate = moment(calendarDate).add(addingValue, "months").toDate();
    }
    dispatch(setDateForCalendar(newDate));
  };

  return (
    <>
      <span
        className="CalendarDateChanger__item_wrapper"
        onClick={() => {
          handleChangeCalendar("prev");
          props.onNavigate("PREV");
        }}
      >
        <Icon icon="arrow-right" className="CalendarDateChanger__arrow left" />
      </span>

      <span className="CalendarDateChanger__item_wrapper">
        <p
          className={`CalendarDateChanger__date ${calendarView === "week" ? "week" : ""}`}
        >
          {props.label}
        </p>
      </span>

      <span
        className="CalendarDateChanger__item_wrapper"
        onClick={() => {
          handleChangeCalendar("next");
          props.onNavigate("NEXT");
        }}
      >
        <Icon icon="arrow-right" className="CalendarDateChanger__arrow " />
      </span>

      <span className="CalendarDateChanger__item_wrapper">
        <Icon icon="calendar" className="CalendarDateChanger__calendar_icon" />
      </span>
    </>
  );
};
