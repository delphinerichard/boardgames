import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

export type GameCardProps = {
  gameName: string;
  gameLink: string;
  gameCoverLink?: string;
  gameDescription?: string;
  externalLink?: boolean;
};

export default function GameCard(props: GameCardProps) {
  const { gameName, gameLink, gameCoverLink, gameDescription, externalLink } = props;
  const navigation = useNavigate();

  return (
    <Card sx={{ width: 300, marginX: 5, borderRadius: 2, borderColor: "primary" }}>
      {!externalLink && (
        <CardActionArea onClick={() => navigation(`${gameLink}`)}>
          {gameCoverLink && (
            <CardMedia sx={{ height: 200 }} image={gameCoverLink} title="game cover image" />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {gameName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gameDescription || ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}

      {externalLink && (
        <CardActionArea component="a" href={`${gameLink}`}>
          {gameCoverLink && (
            <CardMedia sx={{ height: 200 }} image={gameCoverLink} title="game cover image" />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {gameName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gameDescription || ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
}
