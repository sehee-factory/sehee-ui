import { Grid, Stack, Typography } from '@sehee/ui';
import { ELEMENTS } from './constants';

export const Main = () => (
  <Stack gap={8}>
    <Stack>
      <Typography size="3xl" weight="bold">
        연휴에 친구 없어서 만든 UI
      </Typography>
      <Typography className="text-gray-400 line-through">
        왜 친구가 없는 지는 묻지 말아주세요.
      </Typography>
    </Stack>
    <Stack>
      <Typography size="2xl" weight="bold">
        시작하기
      </Typography>
      <Typography>열 받아서 만든 위젯들이 준비 되어있습니다.</Typography>
    </Stack>
    <Stack>
      <Typography size="xl" weight="bold">
        레이아웃
      </Typography>
    </Stack>
    <Stack>
      <Typography size="xl" weight="bold">
        기본 태그
      </Typography>
      <Grid>
        {ELEMENTS.map((element) => (
          <Stack gap={2} key={element.name} className="p-4 border border-gray-200 rounded-md">
            <Typography size="lg" weight="bold">
              {element.name}
            </Typography>
            {<element.component />}
            <Typography size="sm">{element.description}</Typography>
          </Stack>
        ))}
      </Grid>
    </Stack>
    <Stack>
      <Typography size="xl" weight="bold">
        위젯
      </Typography>
    </Stack>
  </Stack>
);
