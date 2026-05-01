import { Button, Checkbox, Description, Input, Radio, Table, Typography } from '@sehee/ui';

type PageConfig = {
  url: string;
  name: string;
  description: string;
  component: () => React.ReactNode;
};

export const ELEMENTS: PageConfig[] = [
  {
    url: '/button',
    name: '버튼',
    description: '버튼',
    component: () => <Button>버튼</Button>,
  },
  {
    url: '/checkbox',
    name: '체크박스',
    description: '체크박스',
    component: () => <Checkbox />,
  },
  {
    url: '/radio',
    name: '라디오 버튼',
    description: '라디오 버튼',
    component: () => <Radio />,
  },
  {
    url: '/table',
    name: '표',
    description: '테이블',
    component: () => (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>제품</Table.Th>
            <Table.Th>가격</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.TBody>
          <Table.Tr>
            <Table.Td>사과</Table.Td>
            <Table.Td>3,000 원</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>바나나</Table.Td>
            <Table.Td>4,000 원</Table.Td>
          </Table.Tr>
        </Table.TBody>
      </Table>
    ),
  },
  {
    url: '/typography',
    name: '글씨',
    description: '글씨',
    component: () => <Typography>홍길동</Typography>,
  },
  {
    url: '/input',
    name: '입력 필드',
    description: '입력',
    component: () => <Input placeholder="입력" />,
  },
  {
    url: '/description',
    name: '설명',
    description: '설명',
    component: () => <Description>설명</Description>,
  },
];
