import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridCloseIcon } from "@mui/x-data-grid";
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import { Button, Card, Modal } from "@mui/material";

const columns = [
  {
    field: "classification",
    headerName: "Classificação",
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Posição do atleta nesse Ranking, nessa Categoria, no período em questão",
  },
  {
    field: "athletesMembersIDs",
    headerName: "Member ID",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1MemberID}<br/>{cellValues.row.athlete2MemberID}</label>)},
    width: 150,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    description: "Código do atleta na Federação",
  },
  {
    field: "athletesNames",
    headerName: "Nome do Atleta/Dupla",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1Name}<br/>{cellValues.row.athlete2Name}</label>)},
    width: 340,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    description: "Nome do atleta (ou atletas, em caso de duplas)",
  },
  {
    field: "athletesAges",
    headerName: "Idade",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1Age}<br/>{cellValues.row.athlete2Age}</label>)},
    type: "number",
    width: 80,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Idade do atleta no período em questão",
  },
  {
    field: "athletesClubs",
    headerName: "Clube",
    renderCell: (cellValues) => {return (<label>{cellValues.row.athlete1Club}<br/>{cellValues.row.athlete2Club}</label>)},
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    description: "Clube do atleta no período em questão",
  },
  {
    field: "scorePoints",
    headerName: "Pontuação",
    type: "number",
    width: 110,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    align: "center",
    description: "Pontos válidos do atleta no período em questão",
  },
  {
    headerName: "Resultados",
    description: "Resultados da equipe por campeonato",
    width: 15,
    sortable: false,
    hideable: false,
    headerAlign: "center",
    // renderCell: (cellValues) => {return <TrophyIcon onClick={handleTrophyClick(cellValues.row.athlete1MemberID, cellValues.row.athlete2MemberID)} />},
  },
];

function rowHeightEval(rankingQueryResults) {
  try { 
    const height = rankingQueryResults[0].athlete2MemberID ? 50 : 35
    return height;
  } catch {
    return 50;
  }
}

function RankingsTable({ rankingQueryResults }) {
  
  const [isResultModalOpen, setIsResultModalOpen] = React.useState(false);
  
  
  function handleTrophyClick(athlete1MemberId, Athlete2MemberId) {
    setIsResultModalOpen(true)

    alert(JSON.stringify({ athlete1MemberId, Athlete2MemberId }))
  }
  
  
  const mock = [
    {ChampionshipName: '2022 Etapa 1 Presidente Getúlio', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 2 Ibirama', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 3 Presidente Getúlio', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 4 Rio do Sul', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Florianópolis', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Florianópolis', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 2 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Presidente Getúlio', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 3 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Ibirama', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Presidente Getúlio', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 4 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Florianópolis', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Ibirama', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Florianópolis', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 2 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Rio do Sul', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 2 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Rio do Sul', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 12 Rio do Sul', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Presidente Getúlio', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Florianópolis', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
    {ChampionshipName: '2022 Etapa 1 Joaçaba', ChampionshipDate: '01/01/2022', ClassificationPosition: '4', ScorePoints: '800'},
  ];

  function renderModalRow(item) {
    return `Campeonato ${item.ChampionshipName} em ${item.ChampionshipDate}: ${item.ClassificationPosition}° lugar - ${item.ScorePoints} pontos`
  }

  function renderRows(list) {
    return list.map(e => {
      return (
        <Card sx={{marginBottom: '1rem', padding: '0.5rem', display: 'inline-block' }}>
          {renderModalRow(e)}
        </Card>
      )
    })
  }

  // Campeonato ${ChampionshipName} em ${ChampionshipDate}: ${ClassificationPosition}° lugar - ${ScorePoints} pontos
  return (
    <div>
    <TrophyIcon onClick={() => handleTrophyClick(1,2)} />

    <Modal
      open={isResultModalOpen}
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      onClose={()=>{}}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      >
      <Box sx={{ width: '70%', height: '90%', backgroundColor: 'white', overflowY: 'scroll', borderRadius: '1rem', padding: '1rem' }}>
        <div style={{ display: 'flex'}}>
          <h2 id="parent-modal-title">Resultados da equipe por campeonato</h2>
          <Button onClick={()=>setIsResultModalOpen(false)}>
            <GridCloseIcon />
        </Button>
        </div>
        {renderRows(mock)}
      </Box>
    </Modal>
  </div>
  )


  
  // if(!rankingQueryResults || !rankingQueryResults.length) {
  //   return <></>
  // }

  return (
    <Box
    sx={{
      height: "100vh",
      width: "100%",
      marginTop: 1,
    }}
    >
    <DataGrid
      rows={rankingQueryResults}
      columns={columns}
      pageSize={25}
      rowsPerPageOptions={[25]}
      rowHeight={rowHeightEval(rankingQueryResults)}
      disableColumnMenu
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />

    </Box>
  );
}

export default RankingsTable