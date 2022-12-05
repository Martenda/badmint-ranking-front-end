import ApiAdapter from "../api/apiAdapter";

function normalizeLabelNames(list) {
  return list.map(i => ({ ...i, label: i.name }))
}

async function getRankingsList() {
  const { data } = await ApiAdapter.get("ranking")
  return normalizeLabelNames(data);
}

async function getCategoriesList() {
  // example for now
  // const response = await ApiAdapter.get("category?ranking=" + rankingId);
  const { data } = await ApiAdapter.get("category");
  return normalizeLabelNames(data);
}

async function getRankingQuery(rankingId, categoryId, periodDate, athleteMemberID, athleteName, athleteAge, athleteClub) {
  // example for now
  // api/ranking-query&cat_id=57&ryear=2022&week=40&page_size=25&page_no=1
  const route = `api/ranking-query?ranking=${rankingId}&category=${categoryId}&period_date=${periodDate}&athlete_member_id=${athleteMemberID}&athlete_name=${athleteName}&athlete_age=${athleteAge}&athlete_club=${athleteClub}` 


  console.log({ getRankingQueryRoute: route })
  const { data } = await ApiAdapter.get(route)
  return normalizeLabelNames(data);
}

export default {
  getRankingsList,
  getCategoriesList,
  getRankingQuery,
}
