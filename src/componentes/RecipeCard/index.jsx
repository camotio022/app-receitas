import { Box, Stack, Typography } from "@mui/material";
import * as S from "./styles";

export const RecipeCard = ({
  title,
  img,
  reviewsCount,
  reviewScore,
  author,
  authorImg,
  likesCount,
  commentsCount,
}) => {
  return (
    <S.Card>
      <Stack>
        <img src={img} alt="" />
        <Stack sx={{ p: 2 }} spacing={2}>
          <Typography variant="h5">{title}</Typography>
          <Stack direction="row" spacing={2}>
            <Box>estrelas</Box>
            <Typography variant="p">{reviewsCount}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <S.AuthorImage>
              <img src={authorImg} alt="" />
            </S.AuthorImage>
            <Box id="info">
              <Typography variant="subtitle1">{author}</Typography>
              <Stack direction="row" spacing={2}>
                <Stack direction="row">{likesCount}</Stack>
                <Stack direction="row">{commentsCount}</Stack>
              </Stack>
            </Box>
            <S.ReviewScore>{reviewScore}</S.ReviewScore>
          </Stack>
        </Stack>
      </Stack>
    </S.Card>
  );
};
