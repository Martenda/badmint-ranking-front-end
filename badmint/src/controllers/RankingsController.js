import dayjs from "dayjs";
import ApiAdapter from "../api/apiAdapter";

function normalizeLabelNames(list) {
  // if there's no "name", then there's nothing to normalize
  if(!list[0]?.name) {
    return list
  }
  return list.map(i => ({ ...i, label: i.name }))
}

async function getRankingsList() {
  try {
    const { data } = await ApiAdapter.get("ranking")
    return normalizeLabelNames(data);
  } catch(e) {
    console.error(e)
    return []
  }
}

async function getCategoriesList() {
  try {
    const { data } = await ApiAdapter.get("category");
    return normalizeLabelNames(data);
  } catch(e) {
    console.error(e)
    return []
  }
}

async function getRankingQuery(rankingId, categoryId, periodDate, memberId, athleteName, athleteAge, athleteClub) {
  const search = memberId || athleteName || athleteAge || athleteClub;

  let route = `ranking-query?ranking=${rankingId}&category=${categoryId}`

  if(search !== null) {
    route += `&search=${search}`
  }
  
  // if the date in the picker is anything different than the initial state, then filter
  const initialPeriod = dayjs(Date.now()).toISOString().substring(0, 10);
  if(initialPeriod !== periodDate) {
    route += `&period_date=${periodDate}`
  }

  // const { data } = await ApiAdapter.get(route)
  // return normalizeLabelNames();
}

export default {
  getRankingsList,
  getCategoriesList,
  getRankingQuery,
}
