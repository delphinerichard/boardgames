import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

export type GameCardProps = {
  gameName: string;
  gameDescription?: string;
};

export default function GameCard(props: GameCardProps) {
  const navigation = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, marginX: 5 }}>
      <CardActionArea onClick={() => navigation(`/skyjo`)}>
        {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.gameName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.gameDescription || ""}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
