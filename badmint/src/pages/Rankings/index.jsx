import { useEffect, useState } from "react";
import RankingFilters from "./RankingFilters";
import RankingsTable from "./RankingsTable";
import RankingsController from '../../controllers/RankingsController'
import dayjs from 'dayjs';

function Rankings() {
  const [rankingsListResults, setRankingsListResults] = useState([]);
  const [rankingSelected, setRankingSelected] = useState({ label: "", id: null });

  const [categoriesListResults, setCategoriesListResults] = useState([]);
  const [categorySelected, setCategorySelected] = useState({ label: "", id: null });

  const initialPeriod = dayjs(Date.now()).toISOString().substring(0, 10);
  const [periodDateSelected, setPeriodDateSelected] = useState(initialPeriod);

  const [athleteMemberIDFilter, setAthleteMemberIDFilter] = useState(null);
  const [athleteNameFilter, setAthleteNameFilter] = useState(null);
  const [athleteAgeFilter, setAthleteAgeFilter] = useState(null);
  const [athleteClubFilter, setAthleteClubFilter] = useState(null);

  const [rankingQueryResults, setRankingQueryResults] = useState([]);
  
  useEffect(function onCreate() {
    async function getRankingsList() {
      const result = await RankingsController.getRankingsList();
      setRankingsListResults(result);
      // just so the grid isn't empty at first
      setRankingSelected(result[0]);


      // const resulta = await RankingsController.getRankingQuery(
      //   rankingSelected?.id,
      //   categorySelected?.id,
      //   periodDateSelected,
      //   athleteMemberIDFilter,
      //   athleteNameFilter,
      //   athleteAgeFilter,
      //   athleteClubFilter
      // );

      // setRankingQueryResults(resulta);

    }
    getRankingsList();
  }, [])

  useEffect(function onRankingChange() {
    async function getCategoriesList() {
      if(!rankingSelected || rankingSelected?.id === null) {
        return
      }

      const result = await RankingsController.getCategoriesList(rankingSelected.id);
      setCategoriesListResults(result);

      // just so the grid isn't empty at first
      setCategorySelected(result[0])
    }
    getCategoriesList();
  }, [rankingSelected])

  useEffect(function onFilterChange() {
    console.log({ athleteMemberIDFilter });
    console.log({ athleteNameFilter });
    console.log({ athleteAgeFilter });
    console.log({ athleteClubFilter });

    async function getRankingQuery() {
      if(rankingSelected?.id === null || categorySelected?.id === null) {
        return
      }
      const result = await RankingsController.getRankingQuery(
        rankingSelected?.id,
        categorySelected?.id,
        periodDateSelected,
        athleteMemberIDFilter,
        athleteNameFilter,
        athleteAgeFilter,
        athleteClubFilter
      );
      console.log({result})
      setRankingQueryResults(result);
    }
    getRankingQuery();
  }, [categorySelected, periodDateSelected, athleteMemberIDFilter, athleteNameFilter, athleteAgeFilter, athleteClubFilter])
  return (
    <div style={{ padding: "4rem", minWidth: 1120 }}>
      <h2>Rankings</h2>
      <RankingFilters
        rankingsListResults={rankingsListResults}
        categoriesListResults={categoriesListResults}
        rankingSelected={rankingSelected}
        setRankingSelected={setRankingSelected}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        setPeriodDateSelected={setPeriodDateSelected}
        setAthleteMemberIDFilter={setAthleteMemberIDFilter}
        setAthleteNameFilter={setAthleteNameFilter}
        setAthleteAgeFilter={setAthleteAgeFilter}
        setAthleteClubFilter={setAthleteClubFilter}
      />
      <RankingsTable rankingQueryResults={rankingQueryResults} />
    </div>
  );
}

export default Rankings;
