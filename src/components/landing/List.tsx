import { supabase } from "supabase";
import { useEffect, useState } from "react";

type MatchListType = {
  matchOrder: number;
  teams: string;
  date: string;
  stadium: string;
};

const teams = [
  "Choose Team",
  "England",
  "New Zealand",
  "Pakistan",
  "Bangladesh",
  "Afghanistan",
  "South Africa",
  "Sri Lanka",
  "India",
  "Australia",
];
const ReactComp = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [matchList, setMatchList] = useState<MatchListType[]>([]);
  useEffect(() => {
    async function getData() {
      let { data, error } = await supabase
        .from("wc-schedule")
        .select()
        .order("matchOrder", { ascending: true });
      // return { matchList, error };
      setMatchList(data);
    }

    // const {matchList,error} =
    getData();
  }, []);
  const handleChangeSelectedTeam = (e) => {
    if (e.target.value === "Choose Team") setSelectedTeam(null);
    else setSelectedTeam(e.target.value);
  };
  const handleClear = () => {
    setSelectedTeam(null);
  };
  

  return (
    <div className="overflow-auto">
      <div className="border-b-2 flex justify-end">
        <select
          id="select-option"
          className=" rounded-sm my-4 mr-4 uppercase font-semibold bg-white focus:ring-black  focus:border-black"
          onChange={handleChangeSelectedTeam}
        >
          {teams.map((team) => {
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
            <th className="pl-4">Teams</th>
            <th>
              <span className="sm:hidden">Date & </span>Stadium
            </th>
          </tr>
        </thead>
        <tbody className="">
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
                  <td className="hidden sm:block h-full p-10">{matchOrder}</td>
                  <td className="p-4">{teams.trim()}</td>
                  <td className="max-w-sm">
                    <span className="">{date}</span>
                    <br />
                    {stadium}
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
