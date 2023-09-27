import { supabase } from "supabase";
import { useEffect, useState } from "react";

type MatchListType = {
  matchOrder: number;
  teams: string;
  date: string;
  stadium: string;
};

const teams = [
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
    setSelectedTeam(e.target.value);
  };


  return (
    <div className="overflow-auto">
      <div className="border flex justify-end">
        <select
          className=" rounded-lg my-4 mr-4  focus:ring-black focus:outline-black focus:border-black"
          onChange={handleChangeSelectedTeam}
        >
          {teams.map((team) => {
            return <option value={team}>{team}</option>;
          })}
        </select>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr className="border-b w-100 text-orange-600 text-left text-lg">
            <th className="hidden sm:block pl-2">Match No.</th>
            <th className="pl-2">Teams</th>
            <th>Date</th>
            <th>Stadium</th>
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
                <tr className="text-white text-sm sm:text-lg mt-4 border-b-2 ">
                  <td className="hidden sm:block h-full pl-2">{matchOrder}</td>
                  <td className="pl-2">{teams.trim()}</td>
                  <td className="text-xs sm:text-lg">{date}</td>
                  <td className="max-w-sm">{stadium}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactComp;
