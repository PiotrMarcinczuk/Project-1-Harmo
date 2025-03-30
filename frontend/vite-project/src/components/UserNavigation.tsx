import myTaskImage from "/image/note.svg";
import user from "/image/user.svg";
import calendarImage from "/image/calendar.svg";
import help from "/image/help.svg";
import logoutIcon from "/image/logout.svg";
import leave from "/image/leave.svg";

import UserAPI from "../api/UserAPI";
import useHttp from "../hooks/useHttp";
import { useParams, Link } from "react-router-dom";
import { memo } from "react";

const UserNavigation = memo(function UserNavigation() {
  const { logout } = UserAPI();
  const { frontUrl } = useHttp();
  const { timetableId } = useParams();

  return (
    <div>
      <div className="absolute mt-6 left-0 z-40">
        <div className="bg-blue-menu w-[380px] text-2xl">
          <ul className="w-full max-w-[300px]">
            <li className="flex w-full p-2">
              <div className="max-w-[48px]">
                <img src={calendarImage} alt="Kalendarz" />
              </div>
              <Link
                to={`${frontUrl}/plan/${timetableId}`}
                className="ml-2 nav-li p-1">
                Kalendarz
              </Link>
            </li>
            <li className="flex w-full p-2">
              <div className="max-w-[48px]">
                <img src={myTaskImage} alt="Moje zadania" />
              </div>
              <Link
                to={`${frontUrl}/plan/${timetableId}/moje-zadania`}
                className="ml-2 nav-li p-1">
                Moje zadania
              </Link>
            </li>
            <li className="flex w-full p-2">
              <div className="max-w-[48px]">
                <img src={user} alt="Moje konto" />
              </div>
              <Link
                to={`${frontUrl}/plan/${timetableId}/moje-konto`}
                className="ml-2 nav-li p-1">
                Moje konto
              </Link>
            </li>
          </ul>

          <ul className="flex flex-wrap max-w-[350px] pt-20 text-2xl font-semibold mb-5 bg-blue-menu">
            <li className="flex w-full p-2">
              <div className="max-w-[48px]">
                <img src={help} alt="Pomoc" />
              </div>
              <Link to={`/pomoc`} className="ml-2 nav-li p-1">
                Pomoc
              </Link>
            </li>
            <li className="flex w-full p-2">
              <div className="max-w-[48px]">
                <img src={logoutIcon} alt="Lista użytkowników" />
              </div>
              <Link to={`${frontUrl}/wybor-plan`} className="ml-2 nav-li p-1">
                Wyjdź z planu
              </Link>
            </li>
            <li className="flex w-full p-2">
              <div className="max-w-[48px]">
                <img src={leave} alt="Wyloguj" />
              </div>
              <a className="ml-2 nav-li p-1" onClick={logout}>
                Wyloguj
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default UserNavigation;
