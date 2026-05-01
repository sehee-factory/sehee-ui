import { Stack, Typography } from '@sehee/ui';
import { ELEMENTS } from './constants';

export const Main = () => (
  <Stack items="start">
    <Typography size="3xl" weight="bold">
      연휴에 친구 없어서 만든 UI
    </Typography>
    <Typography className="text-gray-400 line-through">
      왜 친구가 없는 지는 묻지 말아주세요.
    </Typography>
    <Typography size="xl" weight="bold">
      시작하기
    </Typography>
    <Typography>열 받아서 만든 위젯들이 준비 되어있습니다.</Typography>
    <Typography size="lg" weight="bold">
      요소
    </Typography>
    {ELEMENTS.map((element) => (
      <Stack gap={2}>
        <Typography size="md">{element.name}</Typography>
        {<element.component />}
      </Stack>
    ))}
  </Stack>
);
