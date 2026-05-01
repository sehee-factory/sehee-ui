import { Table } from '@sehee/ui';
import { DescriptionComponent } from '../components/description-component';

export const TablePage = () => (
  <DescriptionComponent componentName="Table" descrption="table">
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
          <Table.Td>5000원</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>바나나</Table.Td>
          <Table.Td>6000원</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  </DescriptionComponent>
);
