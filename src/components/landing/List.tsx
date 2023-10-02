import { supabase } from "supabase";
import { useEffect, useState } from "react";
import { teamList, teams } from "utils";
import { MdSwapHorizontalCircle } from "react-icons/md";
import Icon from "astro-icon";

type MatchListType = {
  matchOrder: number;
  teams: string;
  date: string;
  stadium: string;
};

const ReactComp = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
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
    setSelectedTeam(null);
  };
  const handleToggleTeamsFilter = () => {
    setTeamsFilter(!teamsFilter);
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
          onChange={handleChangeSelectedTeam}
        >
          {["Choose Team", ...teams].map((team) => {
            return <option value={team}>{team}</option>;
          })}
        </select>
        {selectedTeam && (
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
            <th className="hidden sm:block pl-2">Match No.</th>
            <th className="pl-4" onClick={handleToggleTeamsFilter}>
              <div className="flex items-center gap-2 relative cursor-pointer">
                <span>Teams</span>

                <div className="flex items-center ">
                  <MdSwapHorizontalCircle
                    title="Swap"
                    color="white"
                    size={15}
                  />
                  {/* <div className="absolute left-20 bottom-2">
                    {teamsFilter ? <TfiText /> : <FaFlag />}
                  </div> */}
                </div>
              </div>
            </th>
            <th>Venue & Date</th>
          </tr>
        </thead>
        <tbody>
          {matchList
            .filter(({ teams }) => {
              if (selectedTeam) {
                return teams.includes(selectedTeam);
              }
              return true;
            })
            .map(({ matchOrder, teams, stadium, date }) => {
              return (
                <tr className="text-white text-sm sm:text-lg  border-b-2 ">
                  <td className="hidden sm:block h-full p-10 ">{matchOrder}</td>
                  <td className="p-4 flex-1">
                    <div
                      className={`flex items-center gap-2 ${
                        !teamsFilter ? "flex-wrap" : ""
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
                                <div>
                                  {teamList[name]?.symbol && (
                                    <img
                                      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${teamList[name]?.symbol}.svg`}
                                      width={25}
                                    />
                                  )}
                                </div>
                              ) : (
                                <a
                                  className="hover:underline"
                                  href={`teams/${name}`}
                                >
                                  {team.replace(/\s/g, "")}
                                </a>
                              )}

                              {i < 1 ? " vs " : ""}
                            </>
                          );
                        })}
                    </div>
                  </td>
                  <td className="max-w-sm flex-1">
                    <div className="flex flex-col">
                      {stadium.split(",").map((ele) => {
                        return <span>{ele}</span>;
                      })}
                    </div>
                    <span className="text-white/30 ">{date}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactComp;
