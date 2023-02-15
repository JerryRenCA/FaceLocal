import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import styled from "@emotion/styled";
import { format, addDays,addHours, differenceInDays,getHours } from "date-fns";
//type
type T_timePicker = {
  day: number;
  time: number;
  ampm: number;
};

//Styled component
const Container = tw.div`flex flex-col`;
const WrapperSelect = tw.div`flex justify-center`;
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 16,
    border: "1px solid #dadde9",
  },
}));
//Functions
const dayStrToNow = (aDate: Date,wantStr:boolean=true) => {
  let dateStr = format(aDate, "yyyy / MM / dd");
  const today = addHours(new Date(), -1);
  const dayBetween = differenceInDays(aDate,today);
  switch (dayBetween) {
    case 0:
      dateStr = "Today";
      break;
    case 1:
      dateStr = "Tomorrow";
      break;
    default:
      wantStr&&(dateStr = `${dayBetween} days later`);
      break;
  }
  return dateStr
};
//Module
const DatePicker = ({
  title = "Start Time",
  startDate = new Date(),
}: {
  title?: string;
  startDate?: Date;
}) => {
  const default_timePicker: T_timePicker = {
    day: 0,
    time: (getHours(startDate)%12)*2,
    ampm: getHours(startDate)>12?1:0,
  };
  const [dayTime, setDayTime] =
    React.useState<T_timePicker>(default_timePicker);

  const handleChangeDay = (event: SelectChangeEvent, id: number) => {
    if (id == 0) {
      setDayTime({ ...dayTime, day: Number.parseInt(event.target.value) });
    }
    if (id == 1)
      setDayTime({ ...dayTime, time: Number.parseInt(event.target.value) });
    if (id == 2)
      setDayTime({ ...dayTime, ampm: Number.parseInt(event.target.value) });
  };

  return (
    <Container>
      <div>
        <AccessAlarmOutlinedIcon
          sx={{ color: "action.active", mr: 1, mb: 0.5 }}
        />
        <span className=" text-gray-600">{title}</span>
      </div>
      <WrapperSelect>
        <Select
          variant="standard"
          sx={{ m: 1, minWidth: 120, fontSize: 15, height: 25 }}
          id="demo-simple-select-standard"
          value={dayTime.day.toString()}
          onChange={(e) => handleChangeDay(e, 0)}
          label="Date"
          className="text-center"
        >
          <MenuItem value={0} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,0))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 0), "yyyy-MM-dd EEEE")}
                  </em>
                </React.Fragment>
              }
            >
              <button>{dayStrToNow(addDays(startDate,0))}</button>
            </HtmlTooltip>
          </MenuItem>
          <MenuItem value={1} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,1))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 1), "yyyy-MM-dd EEEE")}
                  </em>
                </React.Fragment>
              }
            >
              <button>{dayStrToNow(addDays(startDate,1))}</button>
            </HtmlTooltip>
          </MenuItem>
          <MenuItem value={2} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,2))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 2), "yyyy-MM-dd EEEE")}
                  </em>
                </React.Fragment>
              }
            >
              <button>{dayStrToNow(addDays(startDate,2),false)}</button>
            </HtmlTooltip>
          </MenuItem>
          <MenuItem value={3} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,3))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 3), "yyyy-MM-dd EEEE")}
                  </em>
                </React.Fragment>
              }
            >
              <button>{dayStrToNow(addDays(startDate,3),false)}</button>
            </HtmlTooltip>
          </MenuItem>
          <MenuItem value={4} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,4))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 4), "yyyy-MM-dd EEEE")}
                  </em>
                </React.Fragment>
              }
            >
              <button>{dayStrToNow(addDays(startDate,4),false)}</button>
            </HtmlTooltip>
          </MenuItem>
          <MenuItem value={5} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,5))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 5), "yyyy-MM-dd EEEE")}
                  </em>
                </React.Fragment>
              }
            >
              <button>{dayStrToNow(addDays(startDate,5),false)}</button>
            </HtmlTooltip>
          </MenuItem>
          <MenuItem value={6} sx={{ fontSize: 15 }}>
            <HtmlTooltip
              placement="right"
              title={
                <div>
                  <div className="text-gray-400">{dayStrToNow(addDays(startDate,6))}</div>
                  <em className="text-gray-600">
                    {format(addDays(startDate, 6), "yyyy-MM-dd EEEE")}
                  </em>
                </div>
              }
            >
              <button>{dayStrToNow(addDays(startDate,6),false)}</button>
            </HtmlTooltip>
          </MenuItem>
        </Select>
        <Select
          variant="standard"
          sx={{ m: 1, minWidth: 65, fontSize: 15, height: 25 }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={dayTime.time.toString()}
          onChange={(e) => handleChangeDay(e, 1)}
          label="Date"
          className="text-center"
        >
          <MenuItem value={0} sx={{ fontSize: 15 }}>
            0:00
          </MenuItem>
          <MenuItem value={1} sx={{ fontSize: 15 }}>
            0:30
          </MenuItem>
          <MenuItem value={2} sx={{ fontSize: 15 }}>
            1:00
          </MenuItem>
          <MenuItem value={3} sx={{ fontSize: 15 }}>
            1:30
          </MenuItem>
          <MenuItem value={4} sx={{ fontSize: 15 }}>
            2:00
          </MenuItem>
          <MenuItem value={5} sx={{ fontSize: 15 }}>
            2:30
          </MenuItem>
          <MenuItem value={6} sx={{ fontSize: 15 }}>
            3:00
          </MenuItem>
          <MenuItem value={7} sx={{ fontSize: 15 }}>
            3:30
          </MenuItem>
          <MenuItem value={8} sx={{ fontSize: 15 }}>
            4:00
          </MenuItem>
          <MenuItem value={9} sx={{ fontSize: 15 }}>
            4:30
          </MenuItem>
          <MenuItem value={10} sx={{ fontSize: 15 }}>
            5:00
          </MenuItem>
          <MenuItem value={11} sx={{ fontSize: 15 }}>
            5:30
          </MenuItem>
          <MenuItem value={12} sx={{ fontSize: 15 }}>
            6:00
          </MenuItem>
          <MenuItem value={13} sx={{ fontSize: 15 }}>
            6:30
          </MenuItem>
          <MenuItem value={14} sx={{ fontSize: 15 }}>
            7:00
          </MenuItem>
          <MenuItem value={15} sx={{ fontSize: 15 }}>
            7:30
          </MenuItem>
          <MenuItem value={16} sx={{ fontSize: 15 }}>
            8:00
          </MenuItem>
          <MenuItem value={17} sx={{ fontSize: 15 }}>
            8:30
          </MenuItem>
          <MenuItem value={18} sx={{ fontSize: 15 }}>
            9:00
          </MenuItem>
          <MenuItem value={19} sx={{ fontSize: 15 }}>
            9:30
          </MenuItem>
          <MenuItem value={20} sx={{ fontSize: 15 }}>
            10:00
          </MenuItem>
          <MenuItem value={21} sx={{ fontSize: 15 }}>
            10:30
          </MenuItem>
          <MenuItem value={22} sx={{ fontSize: 15 }}>
            11:00
          </MenuItem>
          <MenuItem value={23} sx={{ fontSize: 15 }}>
            11:30
          </MenuItem>
        </Select>
        <Select
          variant="standard"
          sx={{ m: 1, minWidth: 50, fontSize: 15, height: 25 }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={dayTime.ampm.toString()}
          onChange={(e) => handleChangeDay(e, 2)}
          label="Date"
          className="text-center"
        >
          <MenuItem value={0} sx={{ fontSize: 15 }}>
            AM
          </MenuItem>
          <MenuItem value={1} sx={{ fontSize: 15 }}>
            PM
          </MenuItem>
        </Select>
      </WrapperSelect>
    </Container>
  );
};
export default DatePicker;
