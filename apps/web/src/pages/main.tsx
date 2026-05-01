import { Description, Grid, Stack, Typography } from '@sehee/ui';
import { DescriptionComponent } from '../components/description-component';
import { ELEMENTS } from './elements';

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
      <Description>이딴 거도 패키지로 배포가 된다는 사실을 아시나요</Description>
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
        {ELEMENTS.map((element) => ({
          ...element,
          component: () => (
            <DescriptionComponent
              componentName={element.name}
              descrption={element.description}
              url={`/element/${element.url}`}
            >
              {<element.component />}
            </DescriptionComponent>
          ),
        })).map((element) => (
          <div className="p-4 border border-gray-200 rounded-xl">
            <element.component key={element.name} />
          </div>
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
