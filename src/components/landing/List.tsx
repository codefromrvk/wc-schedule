import { supabase } from "supabase";
import { useEffect, useState } from "react";
import { teamList, teams } from "utils";
import { MdSwapHorizontalCircle } from "react-icons/md";

type MatchListType = {
  matchOrder: number;
  teams: string;
  date: string;
  stadium: string;
};

const ReactComp = () => {
  const [selectedTeam, setSelectedTeam] = useState("Choose Team");
  const [matchList, setMatchList] = useState<MatchListType[]>([]);
  const [teamsFilter, setTeamsFilter] = useState(true);
  useEffect(() => {
    async function getData() {
      let { data } = await supabase
        .from("wc-schedule")
        .select()
        .order("matchOrder", { ascending: true });
      setMatchList(data);
    }

    getData();
  }, []);

  const handleChangeSelectedTeam = (e) => {
    if (e.target.value === "Choose Team") setSelectedTeam(null);
    else setSelectedTeam(e.target.value);
  };
  const handleClear = () => {
    setSelectedTeam("Choose Team");
  };
  const handleToggleTeamsFilter = () => {
    setTeamsFilter(!teamsFilter);
  };

  const renderRow = ({ matchOrder, teams, stadium, date, i }) => {
    const isSameDay =
      matchList[i]?.date.substring(0, 6) ===
      matchList[i - 1]?.date.substring(0, 6);

    // Convert the IST date string to a JavaScript Date object
    const istDate = new Date(`${date},2023 UTC+5:30`);
    // Use the user's coordinates to get their time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Create a DateTimeFormat object with the user's detected time zone
    const userTimeFormat = new Intl.DateTimeFormat("en-US", {
      timeZone: userTimeZone,
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      timeZoneName: "short",
    });

    // Format the date in the user's detected time zone
    const formattedDate = userTimeFormat.format(istDate);
    return (
      <tr
        className={`text-white text-sm sm:text-lg ${
          isSameDay ? "" : "border-t-2"
        } `}
      >
        <td className="hidden sm:block p-10 ">{matchOrder}</td>
        <td className="p-2 w-[50%] sm:w-1/3">
          <div
            className={`flex  items-center gap-2  ${
              !teamsFilter ? "flex-wrap " : "pl-2"
            }`}
          >
            {teams
              .trim()
              .split("vs")
              .map((team, i) => {
                const name = team.replace(/\s/g, "").toLowerCase();

                return (
                  <>
                    {teamsFilter ? (
                      <div title={name}>
                        {teamList[name]?.symbol ? (
                          <a
                            className=" hover:underline"
                            href={`teams/${name}`}
                          >
                            <img
                              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${teamList[name]?.symbol}.svg`}
                              width={25}
                            />
                          </a>
                        ) : (
                          "TBD"
                        )}
                      </div>
                    ) : (
                      <a
                        className="pl-2 hover:underline"
                        href={`teams/${name}`}
                      >
                        {team.replace(/\s/g, "")}
                      </a>
                    )}

                    {i < 1 ? <p className="block">vs</p> : ""}
                  </>
                );
              })}
          </div>
        </td>
        <td className="py-2">
          <div className="flex flex-col">
            {stadium.split(",").map((ele) => {
              return <span>{ele}</span>;
            })}
          </div>
          <span className="text-white/30 ">{formattedDate}</span>
        </td>
      </tr>
    );
  };

  if (matchList.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="mt-10 uppercase text-white md:text-5xl font-display">
          Loading...
        </p>
        <img className="p-10 w-[50%]" src="images/batball.png" />
      </div>
    );
  }

  return (
    <div className="overflow-auto">
      <div className="border-b-2 flex justify-end">
        <select
          id="select-option"
          className=" rounded-sm my-4 mr-4 uppercase font-semibold bg-white focus:ring-black  focus:border-black"
          value={selectedTeam}
          onChange={handleChangeSelectedTeam}
        >
          {["Choose Team", ...teams].map((team) => {
            return (
              <option key={team} value={team}>
                {team}
              </option>
            );
          })}
        </select>
        {selectedTeam && selectedTeam !== "Choose Team" && (
          <button
            className="bg-white border-2 border-orange-200 font-semibold hover:bg-orange-500 w-24  m-4 rounded-sm flex justify-center items-center"
            onClick={handleClear}
          >
            CLEAR
          </button>
        )}
      </div>

      <table className="table-auto w-full uppercase font-semibold ">
        <thead>
          <tr className="border-b w-100 text-orange-600 text-left text-lg">
            <th className="hidden sm:block pl-4">Match No.</th>
            <th className="pl-4" onClick={handleToggleTeamsFilter}>
              <div className="flex items-center gap-2 relative cursor-pointer">
                <span>Match</span>

                <div className="flex items-center ">
                  <MdSwapHorizontalCircle
                    title="Swap"
                    color="white"
                    size={15}
                  />
                </div>
              </div>
            </th>
            <th>Venue & Date</th>
          </tr>
        </thead>
        <tbody>
          {matchList
            .filter(({ teams }) => {
              if (selectedTeam && selectedTeam !== "Choose Team") {
                return teams.includes(selectedTeam);
              }
              return true;
            })
            .map(({ matchOrder, teams, stadium, date }, i) => {
              return renderRow({ matchOrder, teams, stadium, date, i });
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactComp;
